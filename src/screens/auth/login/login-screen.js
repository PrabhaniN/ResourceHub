import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Button,
  View,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

// import { globalStyles } from "../../../../styles/global";
// import Register from "../register/register-screen"
// import {AppLoading} from "expo";
// import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontFamily: "opensans-regular",
          alignSelf: "flex-start",
          marginLeft: 10,
          marginBottom: 5,
        }}
      >
        Username
      </Text>
      <TextInput
        style={styles.form_field}
        placeholder="Enter your username"
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <Text
        style={{
          fontFamily: "opensans-regular",
          alignSelf: "flex-start",
          marginLeft: 10,
          marginBottom: 5,
          marginTop: 25,
        }}
      >
        Password
      </Text>
      <TextInput
        style={styles.form_field}
        placeholder="Enter your password"
        secureTextEntry={true}
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      {/* <Pressable> */}
      <Text style={styles.forget_password}>Forgot Password?</Text>
      {/* </Pressable> */}
      <TouchableOpacity style={styles.login_btn} onPress={() => {}}>
        <Text style={styles.login_btn_text}>Login</Text>
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
        onPress={() => navigation.navigate("Register")}
      >
        Create new account
      </Text>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  form_field: {
    flex: 0,
    alignSelf: "center",
    height: 40,
    width: 350,
    paddingHorizontal: 12,
    borderColor: "#D4D4D4",
    borderRadius: 6,
    borderWidth: 1,
    fontFamily: "opensans-regular",
  },
  forget_password: {
    alignSelf: "flex-end",
    right: 15,
    marginTop: 5,
    marginBottom: 30,
    color: "#959595",
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
  login_btn: {
    flex: 0,
    alignSelf: "center",
    height: 35,
    width: 200,
    marginBottom: 40,
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
});
