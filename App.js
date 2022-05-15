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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CoffeeListScreen" component={CoffeeListScreen} />
          <Stack.Screen name="ShowMap" component={ShowMap} />
          <Stack.Screen
            name="CoffeeDetailScreen"
            component={CoffeeDetailScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="RegisterUserScreen"
            component={RegisterUserScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen name="UserProfile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
