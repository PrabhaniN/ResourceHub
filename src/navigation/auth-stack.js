import React, { Component, useState } from "react";
import { render } from "react-dom";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Login from "../screens/auth/login/login-screen";
import Register from "../screens/auth/register/register-screen";

const Stack = createStackNavigator();

AuthStack = () => (
  <Stack.Navigator mode="card" headerMode="none">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthStack;
