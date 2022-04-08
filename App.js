import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import config from "./src/utils/config";
import CoffeeList from "./src/components/CoffeeList";

export default function App() {
  return <CoffeeList />;
}

/* 

To do list:
- add photos to the database - added mock images
- split up the code to screens
- implement navigation between screens
- map screen with location
- make UI somewhat nice-ish

*/
