import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../../styles/global";
import { Card, Title, Avatar, Paragraph } from "react-native-paper";
import { getForums } from "../../store/actions/forumActions";
import { connect } from "react-redux";

class Notifications extends Component {
  state = {};

  componentDidMount() {
    this.props.getForums();
  }

  render() {
    const { navigation, forums, isLoading } = this.props;

    console.log(isLoading, forums);

    return (
      <SafeAreaView style={globalStyles.container}>
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
            <Text style={{ fontFamily: "opensans-regular", marginRight: 15 }}>
              View all
            </Text>
          </View>
          <Card.Content>
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
                Description goes here bla bla bla
              </Text>
            </View>
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
                <View style={styles.notifiaction_thread}>
                  {isLoading && <Text>Loading</Text>}

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
                    Sample title
                  </Text>
                </View>
              ))}
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  forums: state.forum.forums,
  isLoading: state.forum.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getForums: () => dispatch(getForums()),
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
    // flexGrow: 1,
    textAlign: "left",
  },
  forum_title: {
    fontFamily: "opensans-semibold",
    fontSize: 16,
    marginLeft: 15,
  },
});
