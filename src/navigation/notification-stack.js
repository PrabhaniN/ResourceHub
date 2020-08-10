import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Notifications from "../screens/bottomtabs/notification";
import NotificationsList from "../screens/bottomtabs/notifications-lists/notifications-list";
import ForumList from "../screens/bottomtabs/notifications-lists/forum-list";
import ViewForum from "../screens/bottomtabs/forum/view-forum";
import SubjectResources from "../screens/bottomtabs/subject-resources/subject-resources";

const Stack = createStackNavigator();

function ForumStack() {
  return (
    <Stack.Navigator
      keyboardHandlingEnabled="true"
      mode="card"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#00005C" },
        headerRight: () => (
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
      <Stack.Screen name="ForumList" component={ForumList} />
      <Stack.Screen name="ViewForum" component={ViewForum} />
    </Stack.Navigator>
  );
}

function NotificationsListStack() {
  return (
    <Stack.Navigator
      keyboardHandlingEnabled="true"
      mode="card"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#00005C" },
        headerRight: () => (
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
      <Stack.Screen name="NotificationsList" component={NotificationsList} />
      <Stack.Screen name="SubjectResources" component={SubjectResources} />
    </Stack.Navigator>
  );
}

function NotificationsStack() {
  return (
    <Stack.Navigator
      keyboardHandlingEnabled="true"
      mode="card"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#00005C" },
        headerRight: () => (
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
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="NotificationsListStack"
        component={NotificationsListStack}
      />
      <Stack.Screen name="ForumStack" component={ForumStack} />
    </Stack.Navigator>
  );
}

export default NotificationsStack;
