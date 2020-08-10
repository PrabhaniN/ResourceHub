import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Paragraph } from "react-native-paper";
import { globalStyles } from "../../../../styles/global";

function ViewForum(props) {
  const { params } = props.route;
  console.log(params);

  return (
    <ScrollView style={globalStyles.container}>
      <SafeAreaView>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image
            source={require("../../../../assets/user.png")}
            size={48}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.forum_title}>{params.title}</Text>
            <Text style={styles.forum_details}>
              {params.createdAt.toString()}
            </Text>
            <Text style={styles.forum_details}>{params.createdBy}</Text>
          </View>
        </View>
        <Text style={styles.description}>{params.content}</Text>
      </SafeAreaView>
    </ScrollView>
  );
}

export default ViewForum;

const styles = StyleSheet.create({
  forum_title: {
    fontFamily: "opensans-semibold",
    fontSize: 18,
    marginLeft: 15,
  },
  forum_details: {
    fontFamily: "opensans-regular",
    fontSize: 12,
    marginLeft: 15,
    color: "#959595",
  },
  description: {
    fontFamily: "opensans-regular",
    fontSize: 14,
    marginVertical: 20,
  },
});
