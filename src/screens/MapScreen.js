import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Home({ navigation }) {
  const [location, setLocation] = useState({
    // initial value shouldn't be null
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      });
      console.log(location.coords.latitude); // this works it seems
      console.log(location.coords.longitude);
    })();
  }, []);

  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      region={location}
      provider="google"
    >
      <Marker coordinate={location} />
    </MapView>
  );
}

const styles = StyleSheet.create({});
