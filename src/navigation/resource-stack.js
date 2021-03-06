import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Resources from "../screens/bottomtabs/resource";
import SubjectResources from "../screens/bottomtabs/subject-resources/subject-resources";
import AddResources from "../screens/bottomtabs/subject-resources/add-resources";

const Stack = createStackNavigator();

function SubjectResourceStack() {
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
      <Stack.Screen name="SubjectResources" component={SubjectResources} />
      <Stack.Screen name="AddResources" component={AddResources} />
    </Stack.Navigator>
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
      <Stack.Screen
        name="SubjectResourceStack"
        component={SubjectResourceStack}
      />
    </Stack.Navigator>
  );
}

export default ResourceStack;
