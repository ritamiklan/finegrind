import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "@rneui/themed";

// nested navigation for making the list items clickable
// still messed up, needs fixing

export default function Home(props) {
  // console.log(props);
  return (
    /* <Header
      leftComponent={{ icon: "", color: "#fff" }}
      centerComponent={{ text: props.route.name, style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff " }}
    /> */
    <Text>HOME SCREEN</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
