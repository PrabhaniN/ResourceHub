import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

Notifications = () => (
  <SafeAreaView style={styles.container}>
    <Text>Notifications Tab</Text>
  </SafeAreaView>
);

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
