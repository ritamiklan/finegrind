import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import UserProvider from "./src/context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./src/navigation/TabNavigation";
import color from "./src/styles/color";

export default function App() {
  // let lat = location.coords.latitude;
  // let long = location.coords.longitude;

  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </UserProvider>
  );
}
