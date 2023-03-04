import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import UserProvider from "./src/context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./src/navigation/TabNavigation";

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </UserProvider>
  );
}
