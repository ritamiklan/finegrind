import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapComponent from "../components/MapComponent";
import { globalStyles } from "../styles/global";

export default function Sandbox() {
  return (
    <View style={globalStyles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18 }}>Boilerplate code</Text>
      </View>

      <View style={{ height: 100, flex: 3 }}>
        <MapComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
