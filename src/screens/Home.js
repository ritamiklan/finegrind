import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoffeeDetailScreen from "./CoffeeDetailScreen";

const Stack = createNativeStackNavigator();
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Stack.Navigator>
        <Stack.Screen name="CoffeeDetail" component={CoffeeDetailScreen} />
      </Stack.Navigator>
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
