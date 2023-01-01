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

const stylesStack = {
  headerStyle: {
    backgroundColor: "#5F7161",
  },
  headerTintColor: "#EFEAD8",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function HomeNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={stylesStack} />
      <Stack.Screen
        name="CoffeeListScreen"
        component={CoffeeListScreen}
        options={{
          title: "Cafés",
          headerStyle: {
            backgroundColor: "#5F7161",
          },
          headerTintColor: "#EFEAD8",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ShowMap"
        component={ShowMap}
        options={{
          title: "Map",
          headerStyle: {
            backgroundColor: "#5F7161",
          },
          headerTintColor: "#EFEAD8",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="CoffeeDetailScreen"
        component={CoffeeDetailScreen}
        options={{
          title: "Info",
          headerStyle: {
            backgroundColor: "#5F7161",
          },
          headerTintColor: "#EFEAD8",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="RegisterUserScreen"
        component={RegisterUserScreen}
        options={{
          title: "Register",
          headerStyle: {
            backgroundColor: "#5F7161",
          },
          headerTintColor: "#EFEAD8",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Log in",
          headerStyle: {
            backgroundColor: "#5F7161",
          },
          headerTintColor: "#EFEAD8",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#5F7161",
          },
          headerTintColor: "#EFEAD8",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
