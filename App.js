import React, { Component, useState } from "react";
// import LinearGradient from "react-native-linear-gradient";
import { render } from "react-dom";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Appbar } from "react-native-paper";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/bottomtabs/home-tab";
import Resources from "./src/screens/bottomtabs/resource-tab";
import Notifications from "./src/screens/bottomtabs/notification-tab";
import Profile from "./src/screens/bottomtabs/profile-tab";
import { globalStyles } from "./styles/global";
import SubjectResources from "./src/screens/bottomtabs/subject-resources/subject-resources";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const getFonts = () =>
  Font.loadAsync({
    "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opensans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFondLoaded] = useState(false);

  function createAppbar() {
    return (
      <Appbar.Header style={globalStyles.appbar}>
        <Appbar.Content />
        <Appbar.Action
          icon={() => (
            <Feather name="search" size={24} style={{ color: "#fff" }} />
          )}
          style={{ marginRight: 15 }}
        />
        {/* <Appbar.Action icon="dots-vertical" size={24} /> */}
      </Appbar.Header>
    );
  }

  function ResourceStack() {
    return (
      <Stack.Navigator
        keyboardHandlingEnabled="true"
        mode="card"
        headerMode="screen"
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#00005C" },
          headerRight: () => (
            // (
            //   <Feather
            //     name="search"
            //     size={24}
            //     color="#fff"
            //     style={{ marginRight: 20 }}
            //   />
            // ),
            <Feather
              name="more-vertical"
              size={24}
              color="#fff"
              style={{ marginRight: 20 }}
            />
          ),
          headerTitleContainerStyle: {
            padding: 20,
          },
        }}
      >
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="SubjectResources" component={SubjectResources} />
      </Stack.Navigator>
    );
  }

  function ProfileStack() {
    return (
      <Stack.Navigator
        keyboardHandlingEnabled="true"
        mode="card"
        headerMode="screen"
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#00005C" },
          headerRight: () => (
            // (
            //   <Feather
            //     name="search"
            //     size={24}
            //     color="#fff"
            //     style={{ marginRight: 20 }}
            //   />
            // ),
            <Feather
              name="more-vertical"
              size={24}
              color="#fff"
              style={{ marginRight: 20 }}
            />
          ),
          headerTitleContainerStyle: {
            padding: 20,
          },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={Profile}
          // children={createAppbar}
        />
        <Stack.Screen name="SubjectResources" component={SubjectResources} />
      </Stack.Navigator>
    );
  }

  if (fontLoaded) {
    return (
      <NavigationContainer>
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
        <StatusBar style="light" backgroundColor="#00003D" />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFondLoaded(true)} />
    );
  }
}
