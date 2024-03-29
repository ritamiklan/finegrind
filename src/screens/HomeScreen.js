import React, { useState, useEffect } from "react";
import { Text, View, Image, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useUser } from "../context/UserContext";
import color from "../styles/color";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import useList from "../hooks/useList";
import { mapStyle } from "../styles/mapStyle";

export default function HomeScreen({ navigation }) {
  const { username, isLoggedIn, setUserLoc } = useUser();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coffeeList] = useList();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setUserLoc(location);
    })();
  }, []);

  let welcomeText;
  if (isLoggedIn) {
    welcomeText = (
      <View style={globalStyles.textContainer}>
        <Image
          source={require("../../assets/fg_logo.png")}
          style={globalStyles.logo}
        />
        <Text style={globalStyles.mainText}>Hello, {username}!</Text>
        <Text style={globalStyles.plainText}>Welcome to FineGrind!</Text>
        <Text style={globalStyles.plainText}>
          Specialty Cafés at your fingertips!
        </Text>
        <Text style={globalStyles.plainText}>
          Start to explore and save your favorites!
        </Text>
      </View>
    );
  } else {
    welcomeText = (
      <View style={globalStyles.textContainer}>
        <Image
          source={require("../../assets/fg_logo.png")}
          style={globalStyles.logo}
        />
        <Text style={globalStyles.mainText}>Hello!</Text>
        <Text style={globalStyles.plainText}>Welcome to FineGrind!</Text>
        <Text style={globalStyles.plainText}>
          Specialty Cafés at your fingertips!
        </Text>
        <Text style={globalStyles.plainText}>
          Log in or register to get the most out of the app!
        </Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {welcomeText}

      <View style={{ height: 100, flex: 3 }}>
        {location && (
          <MapView
            customMapStyle={mapStyle}
            style={StyleSheet.absoluteFillObject}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034,
            }}
            provider="google"
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.006,
                longitudeDelta: 0.0054,
              }}
            />
            {coffeeList.map((coffeeList, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: coffeeList.attributes.loc.lat,
                  longitude: coffeeList.attributes.loc.long,
                }}
              >
                <Image
                  style={globalStyles.markerIcon}
                  source={require("../../assets/cup4_blue_48.png")}
                />
                <Callout
                  onPress={() =>
                    navigation.navigate("CoffeeDetailScreen", {
                      id: coffeeList.id,
                    })
                  }
                  tooltip={true}
                >
                  <Text key={index} style={globalStyles.tooltip}>
                    {coffeeList.attributes.name}
                  </Text>
                </Callout>
              </Marker>
            ))}
          </MapView>
        )}
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          color={color.mediumBlue}
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
      </View>
    </View>
  );
}
