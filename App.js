import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/HomeScreen";
import CoffeeListScreen from "./src/screens/CoffeeListScreen";
import CoffeeDetailScreen from "./src/screens/CoffeeDetailScreen";
import ShowMap from "./src/screens/ShowMapScreen";
import RegisterUserScreen from "./src/screens/RegisterUserScreen";
import LoginScreen from "./src/screens/LoginScreen";
import UserProvider from "./src/context/UserContext";
import UserProfile from "./src/screens/UserProfileScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
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
      </NavigationContainer>
    </UserProvider>
  );
}
