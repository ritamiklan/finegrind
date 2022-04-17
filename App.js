import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CoffeeListScreen from "./src/screens/CoffeeListScreen";
import Home from "./src/screens/Home";
import Nestednav from "./src/screens/Nestednav";

import { Header } from "@rneui/themed";

// root screen, here comes the main drawer navigation
export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cafe List" component={CoffeeListScreen} />
        <Drawer.Screen name="nested" component={Nestednav} />
      </Drawer.Navigator>
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
