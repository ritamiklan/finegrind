import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CoffeeListScreen from "../screens/CoffeeListScreen";
import CoffeeDetailScreen from "../screens/CoffeeDetailScreen";
import ShowMap from "../screens/ShowMapScreen";
import RegisterUserScreen from "../screens/RegisterUserScreen";
import LoginScreen from "../screens/LoginScreen";
import UserProfile from "../screens/UserProfileScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import color from "../styles/color";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.mediumBlue,
        },
        headerTintColor: color.light,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="HomeSreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="CoffeeListScreen"
        component={CoffeeListScreen}
        options={{ title: "List of Cafes" }}
      />
      <Stack.Screen
        name="ShowMap"
        component={ShowMap}
        options={{ title: "Map" }}
      />
      <Stack.Screen
        name="CoffeeDetailScreen"
        component={CoffeeDetailScreen}
        options={{ title: "Cafe page" }}
      />
      <Stack.Screen
        name="RegisterUserScreen"
        component={RegisterUserScreen}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.mediumBlue,
        },
        headerTintColor: color.light,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}

function RegisterStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.mediumBlue,
        },
        headerTintColor: color.light,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="RegisterUserScreen"
        component={RegisterUserScreen}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}

function FavsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.mediumBlue,
        },
        headerTintColor: color.light,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="CoffeeListScreen"
        component={CoffeeListScreen}
        options={{ title: "List of cafes" }}
      />
      <Stack.Screen
        name="ShowMap"
        component={ShowMap}
        options={{ title: "Map" }}
      />
      <Stack.Screen
        name="CoffeeDetailScreen"
        component={CoffeeDetailScreen}
        options={{ title: "Cafe page" }}
      />
      <Stack.Screen
        name="RegisterUserScreen"
        component={RegisterUserScreen}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}

export {
  HomeStack,
  ProfileStackNavigator,
  RegisterStackNavigator,
  FavsStackNavigator,
};
