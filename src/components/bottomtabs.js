import React, { Component, useState } from "react";
import { render } from "react-dom";
import "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/bottomtabs/home";
import Notifications from "../screens/bottomtabs/notification";
import { globalStyles } from "../../styles/global";
import ResourceStack from "../navigation/resource-stack";
import ProfileStack from "../navigation/profile-stack";

const BottomTabs = createBottomTabNavigator();

BottomTabsScreen = () => (
  <BottomTabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "#00005C",
      inactiveTintColor: "#A1A1E3",
      keyboardHidesTabBar: "true",
    }}
    backBehavior="initialRoute"
    lazy="false"
    style={globalStyles.bottomNav}
  >
    <BottomTabs.Screen
      name="Home Tab"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={24} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Resources"
      component={ResourceStack}
      options={{
        tabBarLabel: "Resources",
        tabBarIcon: ({ color }) => (
          <Feather name="folder" size={24} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarLabel: "Notifications",
        tabBarIcon: ({ color }) => (
          <Feather name="bell" size={24} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <Feather name="user" size={24} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default BottomTabsScreen;
