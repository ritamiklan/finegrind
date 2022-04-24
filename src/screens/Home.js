import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// nested navigation for making the list items clickable
// still messed up, needs fixing

export default function Home({ navigation }) {
  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button
        title="Explore cafes"
        onPress={() => navigation.navigate("CoffeeListScreen")}
      />
    </View>
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
