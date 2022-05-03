import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.details}>
        <Text>Hello</Text>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
        <Button title="Map" onPress={() => navigation.navigate("MapScreen")} />
      </View>
    </View>
  );
}
