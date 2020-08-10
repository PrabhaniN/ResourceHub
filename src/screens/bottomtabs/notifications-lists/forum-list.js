import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Paragraph, Card } from "react-native-paper";
import { getForums } from "../../../store/actions/forumActions";
import { globalStyles } from "../../../../styles/global";
import { connect } from "react-redux";

class ForumList extends Component {
  componentDidMount() {
    this.props.getForums();
  }

  render() {
    const { navigation, forums, isLoading } = this.props;
    console.log(forums);

    return (
      <ScrollView style={globalStyles.container}>
        <SafeAreaView>
          {isLoading && <Text>Loading...</Text>}
          {forums &&
            forums.map((forum) => (
              <Card
                style={styles.notifiaction_thread}
                onPress={() =>
                  navigation.navigate("ForumStack", {
                    screen: "ViewForum",
                    params: forum,
                  })
                }
              >
                <Card.Content style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    source={require("../../../../assets/user.png")}
                    size={48}
                    style={{ borderRadius: 24 }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={styles.forum_title}
                      ellipsizeMode="tail"
                      numberOfLines={1}
                    >
                      {forum.title}
                    </Text>
                    <Text style={styles.time}>
                      {forum.createdAt.toString()}
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
  forums: state.forum.forums,
  isLoading: state.forum.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getForums: () => dispatch(getForums()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumList);

const styles = StyleSheet.create({
  notifiaction_thread: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    marginHorizontal: 0,
  },
  forum_title: {
    fontFamily: "opensans-semibold",
    fontSize: 16,
    marginLeft: 15,
  },
  time: {
    fontFamily: "opensans-regular",
    fontSize: 12,
    marginLeft: 15,
    color: "#959595",
  },
});
