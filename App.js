import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

import BottomTabsScreen from "./src/components/bottomtabs";
import AuthStack from "./src/navigation/auth-stack";
import Onboarding from "./src/screens/splash/splash-screen";
// import createAppbar from "./src/components/appbar"

firebase.initializeApp(firebaseConfig);

// const Stack = createStackNavigator();
// const BottomTabs = createBottomTabNavigator();

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
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        {isLoading ? (
          <Onboarding />
        ) : user ? (
          <BottomTabsScreen />
        ) : (
          <AuthStack />
        )}
        <StatusBar style="light" backgroundColor="#00003D" />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFondLoaded(true)} />
    );
  }
}
