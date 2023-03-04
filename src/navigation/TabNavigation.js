import React from "react";
import { useUser } from "../context/UserContext";

import { View, TouchableOpacity } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {
  HomeStack,
  ProfileStackNavigator,
  RegisterStackNavigator,
  FavsStackNavigator,
} from "./StackNavigation";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  const { isLoggedIn } = useUser();

  let tabnav;

  if (isLoggedIn == false) {
    tabnav = (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Log In" component={RegisterStackNavigator} />
      </Tab.Navigator>
    );
  } else {
    tabnav = (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favs" component={FavsStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    );
  }
  return <>{tabnav}</>;
}
