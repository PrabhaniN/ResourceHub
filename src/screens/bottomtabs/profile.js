import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { Appbar, Card } from "react-native-paper";
import { globalStyles } from "../../../styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { SubjectResources } from "./subject-resources/subject-resources";

function Profile({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <SafeAreaView>
        <View style={{ flex: 0, flexDirection: "row" }}>
          <Icon name="user" size={120} style={styles.profile_image} />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.year}>Year</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 50,
            fontSize: 20,
            fontWeight: "600",
            marginLeft: 20,
            fontFamily: "ubuntu-bold",
            marginBottom: 20,
          }}
        >
          Personal Details
        </Text>
        <View style={{ flex: 0, flexDirection: "row" }}>
          <Text
            style={{
              marginBottom: 15,
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 20,
              fontFamily: "opensans-regular",
            }}
          >
            Index No:
          </Text>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "opensans-regular",
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 40,
            }}
          >
            12345678
          </Text>
        </View>
        <View style={{ flex: 0, flexDirection: "row" }}>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "opensans-regular",
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 20,
            }}
          >
            Reg No:
          </Text>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "opensans-regular",
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 51,
            }}
          >
            CS/131/2018
          </Text>
        </View>
        <View style={{ flex: 0, flexDirection: "row" }}>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "opensans-regular",
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 20,
            }}
          >
            Gender:
          </Text>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "opensans-regular",
              fontSize: 14,
              fontWeight: "500",
              marginLeft: 50,
            }}
          >
            Female
          </Text>
        </View>
        <Text
          style={{
            marginTop: 35,
            fontSize: 20,
            fontWeight: "600",
            marginLeft: 20,
            marginBottom: 30,
            fontFamily: "ubuntu-bold",
          }}
        >
          Courses Following
        </Text>
        <Card
          style={styles.subject_card}
          onPress={() => navigation.navigate("SubjectResources")}
        >
          <Card.Content style={styles.card_details}>
            <Text
              style={{
                fontFamily: "opensans-regular",
                fontSize: 15,
              }}
            >
              Course code - Course Name
            </Text>
          </Card.Content>
        </Card>
        <Card
          style={styles.subject_card}
          onPress={() => navigation.navigate("SubjectResources")}
        >
          <Card.Content style={styles.card_details}>
            <Text
              style={{
                fontFamily: "opensans-regular",
                fontSize: 15,
              }}
            >
              Course code - Course Name
            </Text>
          </Card.Content>
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profile_image: {
    marginTop: 32,
    marginLeft: 35,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    // fontWeight: "600",
    fontFamily: "ubuntu-bold",
    color: "#4E546B",
    top: 70,
    marginLeft: 40,
  },
  year: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "opensans-semibold",
    marginLeft: 40,
    top: 70,
    color: "#4E546B",
  },
  subject_card: {
    width: 370,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#EEE",
  },
});
