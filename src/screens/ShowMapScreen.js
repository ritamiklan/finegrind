import React from "react";
import { View, Text } from "react-native";
import MapComponent from "../components/MapComponent";
import { globalStyles } from "../styles/global";

export default function ShowMap({ route }) {
  const { data } = route.params;

  return (
    <View style={globalStyles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18 }}>{data.attributes.name}</Text>
      </View>

      <View style={{ height: 100, flex: 3 }}>
        <MapComponent mapdata={data} />
      </View>
    </View>
  );
}
