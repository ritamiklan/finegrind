import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapComponent from "../components/MapComponent";
import { globalStyles } from "../styles/global";

import * as Location from "expo-location";

// just using this now as a dumping ground atm

export default function Sandbox() {
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
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      });
      console.log(location.coords.latitude); // this works it seems
      console.log(location.coords.longitude);
    })();
  }, []);

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
