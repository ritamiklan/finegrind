import React from "react";
import Home from "../screens/HomeScreen";
import CoffeeListScreen from "../screens/CoffeeListScreen";
import CoffeeDetailScreen from "../screens/CoffeeDetailScreen";
import ShowMap from "../screens/ShowMapScreen";
import RegisterUserScreen from "../screens/RegisterUserScreen";
import LoginScreen from "../screens/LoginScreen";
import UserProfile from "../screens/UserProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5F7161",
        },
        headerTintColor: "#EFEAD8",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CoffeeListScreen" component={CoffeeListScreen} />
      <Stack.Screen name="ShowMap" component={ShowMap} />
      <Stack.Screen name="CoffeeDetailScreen" component={CoffeeDetailScreen} />
      <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}

export { HomeStack, ProfileStackNavigator };
