import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Paragraph, Card } from "react-native-paper";

import { globalStyles } from "../../../../styles/global";
import { connect } from "react-redux";
import { getNotifications } from "../../../store/actions/notificationActions";
import notification from "../notification";

class NotificationsList extends Component {
  componentDidMount() {
    this.props.getNotifications();
  }

  render() {
    const { navigation, notifications, isLoading } = this.props;

    return (
      <ScrollView style={globalStyles.container}>
        <SafeAreaView>
          {notifications &&
            notifications.map((notification) => (
              <Card
                style={styles.notifiaction_thread}
                onPress={
                  () => {}
                  // navigation.navigate("NotificationsListStack", {
                  //   screen: "SubjectResources",
                  // })
                }
              >
                <Card.Content style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    source={require("../../../../assets/user.png")}
                    size={48}
                    style={{ borderRadius: 24 }}
                  />
                  <View>
                    <Text
                      style={styles.description}
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {notification.title}
                    </Text>
                    <Text style={styles.time}>
                      {notification.at.toString()}
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
  isLoading: state.notification.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getNotifications: () => dispatch(getNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList);

const styles = StyleSheet.create({
  notifiaction_thread: {
    alignItems: "flex-start",
    alignSelf: "center",
    marginBottom: 10,
    marginHorizontal: 0,
    width: 370,
  },
  description: {
    fontFamily: "opensans-regular",
    marginLeft: 15,
    // flexGrow: 1,
    textAlign: "left",
    marginRight: 20,
    width: 270,
  },
  time: {
    fontFamily: "opensans-regular",
    fontSize: 12,
    marginLeft: 15,
    color: "#959595",
  },
});
