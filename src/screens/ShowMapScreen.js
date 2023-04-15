import React from "react";
import { View, Text } from "react-native";
import MapComponent from "../components/MapComponent";
import { globalStyles } from "../styles/global";

export default function ShowMap({ route }) {
  const { data } = route.params;

  return (
    <View style={globalStyles.container}>
      <View style={{ flex: 1 }}>
        <Text style={globalStyles.headerText}>{data.attributes.name}</Text>
        <Text style={globalStyles.plainCenterText}>
          Address: {data.attributes.address}
        </Text>
        <Text style={globalStyles.plainCenterText}>
          {data.attributes.zip_code} {data.attributes.city}
        </Text>
      </View>

      <View style={{ height: 100, flex: 3 }}>
        <MapComponent mapdata={data} />
      </View>
    </View>
  );
}
