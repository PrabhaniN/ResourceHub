import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Title, Paragraph } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import { globalStyles } from "../../../../styles/global";

function SubjectResources() {
  return (
    <ScrollView style={globalStyles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            // alignItems: "stretch",
          }}
        >
          <Title
            style={{
              fontFamily: "ubuntu-medium",
              fontSize: 24,
              marginLeft: 20,
              // marginBottom: 30,
              color: "#00005C",
              flexGrow: 1,
            }}
          >
            Subject Name
          </Title>
          <Feather
            name="search"
            size={24}
            color="#00005C"
            style={{ alignSelf: "flex-end", marginRight: 20 }}
          />
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Resource Title</Title>
            <Paragraph style={{ fontSize: 15, textAlign: "justify" }}>
              Resource Description Lorem Ipsem bla bla bla
            </Paragraph>
            <View style={{ flex: 0, flexDirection: "row", marginTop: 20 }}>
              <Image
                source={require("../../../../assets/icons/pdf.png")}
                style={styles.icon}
              />
              <Text style={styles.link}>document.pdf</Text>
            </View>
          </Card.Content>
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
}

export default SubjectResources;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: 370,
    marginBottom: 15,
    backgroundColor: "#EEE",
    borderRadius: 12,
  },
  title: {
    fontFamily: "opensans-semibold",
  },
  icon: {
    height: 24,
    width: 24,
  },
  link: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 10,
  },
});
