// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
// import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// import Onboarding from "./src/screens/onboarding/onboarding-screen";
import { render } from "react-dom";
// import Login from "./src/screens/auth/login/login-screen";
import Register from "./src/screens/auth/register/register-screen";

export default class App extends Component {
  render() {
    // return <Onboarding />;
    // <NavigationContainer>{<Onboarding />}</NavigationContainer>;
    return <Register />;
  }
}
