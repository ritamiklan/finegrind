import React from "react";
import { useUser } from "../context/UserContext";
import { Ionicons } from "@expo/vector-icons";
import color from "../styles/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStack,
  ProfileStackNavigator,
  RegisterStackNavigator,
  FavsStackNavigator,
} from "./StackNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const { isLoggedIn } = useUser();

  let tabnav;

  if (isLoggedIn == false) {
    tabnav = (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Log In") {
              iconName = focused ? "log-in" : "log-in-outline";
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: color.darkGreen,
          tabBarInactiveTintColor: color.lightGreen,
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Log In" component={RegisterStackNavigator} />
      </Tab.Navigator>
    );
  } else {
    tabnav = (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Favs") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (rn === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: color.darkGreen,
          tabBarInactiveTintColor: color.lightGreen,
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favs" component={FavsStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    );
  }
  return <>{tabnav}</>;
}
