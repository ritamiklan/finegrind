import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import CoffeeListScreen from "./src/screens/CoffeeListScreen";
import CoffeeDetailScreen from "./src/screens/CoffeeDetailScreen";
import ShowMap from "./src/screens/ShowMap";
import RegisterUserScreen from "./src/screens/RegisterUserScreen";
import UserProvider from "./src/context/UserContext";

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
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
