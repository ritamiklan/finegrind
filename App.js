import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CoffeeListScreen from "./src/screens/CoffeeListScreen";
import Home from "./src/screens/Home";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cafe List" component={CoffeeListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/* 

To do list:
- add photos to the database - added mock images
- split up the code to screens
- implement navigation between screens
- map screen with location
- make UI somewhat nice-ish

*/
