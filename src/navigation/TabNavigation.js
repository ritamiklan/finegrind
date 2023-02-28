import React from "react";

import { View, TouchableOpacity } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { HomeStack, ProfileStackNavigator } from "./StackNavigation";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
