import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../../styles/global";
import { Card, Title, Avatar, Paragraph } from "react-native-paper";
import { getForums } from "../../store/actions/forumActions";
import { getNotifications } from "../../store/actions/notificationActions";
import { connect } from "react-redux";

class Notifications extends Component {
  state = {};

  componentDidMount() {
    this.props.getForums();
    this.props.getNotifications();
  }

  render() {
    const { navigation, notifications, forums, isLoading } = this.props;

    console.log(isLoading, forums, notifications);

    return (
      <SafeAreaView style={globalStyles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Card
              style={{ borderRadius: 12, marginBottom: 20, width: 370 }}
              onPress={() =>
                navigation.navigate("NotificationsListStack", {
                  screen: "NotificationsList",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Title style={styles.title}>Notifications</Title>
                <Text
                  style={{ fontFamily: "opensans-regular", marginRight: 15 }}
                >
                  View all
                </Text>
              </View>
              <Card.Content>
                {notifications &&
                  notifications.map((notification) => (
                    <View style={styles.notifiaction_thread}>
                      <Avatar.Image
                        source={require("../../../assets/user.png")}
                        size={48}
                        style={{ borderRadius: 24 }}
                      />
                      <Text
                        style={styles.description}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                      >
                        {notification.title}
                      </Text>
                    </View>
                  ))}
              </Card.Content>
            </Card>
            <Card
              style={{ borderRadius: 12 }}
              onPress={() =>
                navigation.navigate("ForumStack", { screen: "ForumList" })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Title style={styles.title}>Forum</Title>
                <Text
                  style={{ fontFamily: "opensans-regular", marginRight: 15 }}
                  accessibilityRole="link"
                >
                  View all
                </Text>
              </View>
              <Card.Content>
                {forums &&
                  forums.map((forum) => (
                    <View style={styles.notifiaction_thread} key={forum.id}>
                      <Avatar.Image
                        source={require("../../../assets/user.png")}
                        size={48}
                        style={{ borderRadius: 24 }}
                      />
                      <Text
                        style={styles.forum_title}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                      >
                        {forum.title}
                      </Text>
                    </View>
                  ))}
              </Card.Content>
            </Card>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  forums: state.forum.forums,
  notifications: state.notification.notifications,
  isLoading: state.forum.isLoading || state.notification.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getForums: () => dispatch(getForums()),
    getNotifications: () => dispatch(getNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "ubuntu-medium",
    color: "#00005C",
    marginLeft: 15,
    marginBottom: 20,
    marginTop: 10,
    flexGrow: 1,
  },
  notifiaction_thread: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  description: {
    fontFamily: "opensans-regular",
    marginLeft: 15,
    width: 275,
    // flexGrow: 1,
    // overflow: "hidden",
    textAlign: "left",
  },
  forum_title: {
    fontFamily: "opensans-semibold",
    fontSize: 16,
    marginLeft: 15,
    width: 275,
  },
});
