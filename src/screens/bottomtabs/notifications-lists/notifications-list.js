import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Paragraph, Card } from "react-native-paper";

import { globalStyles } from "../../../../styles/global";

function NotificationsList({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <SafeAreaView>
        <Card
          style={styles.notifiaction_thread}
          onPress={() =>
            navigation.navigate("NotificationsListStack", {
              screen: "SubjectResources",
            })
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
                Description goes here bla bla bla
              </Text>
              <Text style={styles.time}>Time</Text>
            </View>
          </Card.Content>
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
}

export default NotificationsList;

const styles = StyleSheet.create({
  notifiaction_thread: {
    alignItems: "flex-start",
    marginBottom: 20,
    marginHorizontal: 0,
  },
  description: {
    fontFamily: "opensans-regular",
    marginLeft: 15,
    // flexGrow: 1,
    textAlign: "left",
    marginRight: 20,
  },
  time: {
    fontFamily: "opensans-regular",
    fontSize: 12,
    marginLeft: 15,
    color: "#959595",
  },
});
