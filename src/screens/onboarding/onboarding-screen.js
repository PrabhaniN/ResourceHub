import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
// import Login from "../auth/login/login-screen";

class Onboarding extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Button title="next" onPress={() => {}} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
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
