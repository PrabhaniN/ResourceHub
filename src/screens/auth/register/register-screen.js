import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Button,
  Image,
  View,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import {AppLoading} from "expo";
// import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.form_labels}>Index Number</Text>
      <TextInput
        style={styles.form_field}
        placeholder="Enter your index number"
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <Text style={styles.password_label}>Email</Text>
      <TextInput
        style={styles.form_field}
        placeholder="Enter your email"
        secureTextEntry={true}
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <Text style={styles.password_label}>Password</Text>
      <TextInput
        style={styles.form_field}
        placeholder="Enter your password"
        secureTextEntry={true}
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <TouchableOpacity style={styles.login_btn} onPress={() => {}}>
        <Text style={styles.login_btn_text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.google_signin_btn} onPress={() => {}}>
        <View
          style={{
            flexDirection: "row",
            // alignItems: "center",
            marginHorizontal: 20,
            marginVertical: 8,
            // justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../../assets/icons/google.png")}
            style={{ height: 18, width: 18 }}
          />
          <Text style={styles.google_signin_btn_text}>Signin with Google</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: "center",
          justifyContent: "flex-end",
          fontFamily: "opensans-regular",
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account?
      </Text>
    </SafeAreaView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 192.5,
    resizeMode: "contain",
  },
  form_labels: {
    // fontFamily: "OpenSans_400Regular",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    left: 40,
    // marginTop: 247,
  },
  password_label: {
    // fontFamily: "OpenSans_400Regular",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    left: 40,
    marginTop: 25,
  },
  form_field: {
    flex: 0,
    alignSelf: "center",
    // justifyContent: "center",
    height: 40,
    width: 334,
    marginTop: 2,
    paddingHorizontal: 12,
    borderColor: "#D4D4D4",
    borderRadius: 6,
    borderWidth: 1,
  },
  forget_password: {
    alignSelf: "flex-end",
    right: 40,
    marginTop: 5,
    color: "#959595",
  },
  login_btn: {
    flex: 0,
    alignSelf: "center",
    height: 35,
    width: 200,
    marginVertical: 30,
    borderRadius: 12,
    borderWidth: 0,
    backgroundColor: "#00005C",
  },
  login_btn_text: {
    alignSelf: "center",
    color: "#FFDCB4",
    fontStyle: "normal",
    fontFamily: "opensans-semibold",
    fontSize: 15,
    marginTop: 6,
  },
  google_signin_btn: {
    alignSelf: "center",
    backgroundColor: "#EEE",
    height: 35,
    width: 200,
    borderRadius: 12,
  },
  google_signin_btn_text: {
    alignSelf: "center",
    // flexGrow: 1,
    color: "#00005C",
    fontStyle: "normal",
    fontFamily: "opensans-semibold",
    fontSize: 15,
    marginLeft: 15,
  },
});
