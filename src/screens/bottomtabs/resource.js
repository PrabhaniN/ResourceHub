import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "../../../styles/global";

function Resources({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {/* <Text>Profile Tab</Text> */}
        <Card
          style={styles.subject_card}
          onPress={() => navigation.navigate("SubjectResources")}
        >
          <Card.Content style={styles.card_details}>
            <Title style={{ flexGrow: 1 }}>Subject Name</Title>
            <Feather
              name="chevron-right"
              size={24}
              color="black"
              style={{ marginTop: 3 }}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Resources;

const styles = StyleSheet.create({
  subject_card: {
    flex: 0,
    width: 370,
    borderRadius: 12,
    // borderColor: "#D4D4D4",
    backgroundColor: "#EEE",
    marginBottom: 10,
    alignSelf: "center",
    // height: 70,
  },
  card_details: {
    // flex: 1,
    flexDirection: "row",
  },
});
