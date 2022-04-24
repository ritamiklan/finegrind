import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Cafe list"
        onPress={() => navigation.navigate("CoffeeListScreen")}
      />
      <Button title="Map" onPress={() => navigation.navigate("MapScreen")} />
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
