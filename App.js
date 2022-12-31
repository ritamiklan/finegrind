import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import UserProvider from "./src/context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNav from "./src/navigation/StackNavigation";

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationContainer>
          <HomeNav />
        </NavigationContainer>
      </SafeAreaView>
    </UserProvider>
  );
}
