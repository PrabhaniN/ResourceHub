import React from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.description}>
        Mobile app to facilitate learning material sharing for an education
        institute
      </Text>
      <Text style={styles.text_name}>Name: P C Nanayakkara</Text>
      <Text style={styles.text}>Index: 17001137</Text>
      <Text style={styles.text}>Reg No: 2017/CS/113</Text>
      {/* <Pressable style={styles.item}></Pressable> */}
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 10,
  },
  description: {
    fontFamily: "opensans-regular",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  text_name: {
    fontFamily: "opensans-semibold",
    fontSize: 20,
    marginBottom: 5,
  },
  text: {
    fontFamily: "opensans-regular",
    fontSize: 16,
    marginBottom: 5,
  },
});
