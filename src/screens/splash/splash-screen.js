import React from "react";
import { render } from "react-dom";
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, Image, Button } from "react-native";

const Onboarding = () => (
  <SafeAreaView style={styles.container}>
    <Image source={require("../../../assets/logo.png")} style={styles.logo} />
  </SafeAreaView>
);

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    height: 80,
    width: 192.5,
    resizeMode: "contain",
  },
});
