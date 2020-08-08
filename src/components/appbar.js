import React from "react";
import "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";

import { globalStyles } from "./styles/global";

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

export default createAppbar;
