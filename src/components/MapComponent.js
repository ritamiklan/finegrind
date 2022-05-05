import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapComponent({ mapdata }) {
  const [cafeLoc, setCafeLoc] = useState({
    latitude: mapdata.attributes.loc.lat,
    longitude: mapdata.attributes.loc.long,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
  });

  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      region={cafeLoc}
      provider="google"
    >
      <Marker coordinate={cafeLoc} />
    </MapView>
  );
}
