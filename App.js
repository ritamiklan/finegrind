import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import CoffeeListScreen from "./src/screens/CoffeeListScreen";
import CoffeeDetailScreen from "./src/screens/CoffeeDetailScreen";
import ShowMap from "./src/screens/ShowMap";

// root screen, here comes the main drawer navigation
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoffeeListScreen" component={CoffeeListScreen} />
        <Stack.Screen name="ShowMap" component={ShowMap} />
        <Stack.Screen
          name="CoffeeDetailScreen"
          component={CoffeeDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* 

To do list:
- add photos to the database - added mock images
- split up the code to screens - sort of done
- implement navigation between screens - needs to be properly fixed, buggy
- coords need to be added to API
- map screen with location
- make UI somewhat nice-ish
*/
