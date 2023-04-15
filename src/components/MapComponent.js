import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { mapStyle } from "../styles/mapStyle";
import { globalStyles } from "../styles/global";

export default function MapComponent({ mapdata }) {
  const [cafeLoc] = useState({
    latitude: mapdata.attributes.loc.lat,
    longitude: mapdata.attributes.loc.long,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
  });

  const calloutText = mapdata.attributes.name;

  return (
    <MapView
      customMapStyle={mapStyle}
      style={StyleSheet.absoluteFillObject}
      region={cafeLoc}
      provider="google"
    >
      <Marker coordinate={cafeLoc}>
        <Image
          style={globalStyles.markerIcon}
          source={require("../../assets/cup4_blue_48.png")}
        />
        <Callout tooltip={true}>
          <Text style={globalStyles.tooltip}>{calloutText}</Text>
        </Callout>
      </Marker>
    </MapView>
  );
}
