// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Image, Button } from "react-native";

import Home from "../bottomtabs/home-tab";

function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <Button title="next" onPress={() => {}} />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

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
