import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { Appbar, Card } from "react-native-paper";
import { globalStyles } from "../../../styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { SubjectResources } from "./subject-resources/subject-resources";

function Profile({ navigation }) {
  const username = "P C Nanayakkara";
  const year = "3rd";
  const indexNo = "17001137";
  const regNo = "2017/CS/001";
  const gender = "Female";
  const course_code = "SCS2210";
  const course_name = "Database I";

  return (
    <ScrollView style={globalStyles.container}>
      <SafeAreaView>
        <View style={{ flex: 0, flexDirection: "row" }}>
          {/* <Icon name="user" size={120} style={styles.profile_image} /> */}
          <Image
            source={require("../../../assets/user.png")}
            style={styles.profile_image}
          />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={styles.name}>{username}</Text>
            <Text style={styles.year}>{year} Year</Text>
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
            {indexNo}
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
            {regNo}
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
            {gender}
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
              {course_code} - {course_name}
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
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  name: {
    fontSize: 24,
    // fontWeight: "600",
    fontFamily: "ubuntu-bold",
    color: "#4E546B",
    top: 50,
    marginLeft: 30,
  },
  year: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "opensans-semibold",
    marginLeft: 30,
    top: 50,
    color: "#4E546B",
  },
  subject_card: {
    width: 370,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#EEE",
  },
});
