import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoffeeDetailScreen from "./CoffeeDetailScreen";
import CoffeeListScreen from "./CoffeeListScreen";

// nested navigation for making the list items clickable
// still messed up, needs fixing

const Stack = createNativeStackNavigator();
export default function Nestednav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoffeeList"
        component={CoffeeListScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Coffee Detail"
        component={CoffeeDetailScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
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
