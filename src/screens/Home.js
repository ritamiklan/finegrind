import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoffeeDetailScreen from "./CoffeeDetailScreen";
import Welcome from "./Welcome";

const Stack = createNativeStackNavigator();
export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoffeeDetail"
        component={CoffeeDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    //</View>
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
