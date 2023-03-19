import React, { useState, useEffect } from "react";
import { Text, View, Image, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useUser } from "../context/UserContext";
import color from "../styles/color";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function Home({ navigation }) {
  const { username, isLoggedIn, userLoc, setUserLoc } = useUser();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setUserLoc(currentLocation);
    })();
  }, []);

  console.log("location from home screen", location);

  console.log("location in context", userLoc);

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
        {userLoc && (
          <MapView
            style={StyleSheet.absoluteFillObject}
            region={{
              latitude: userLoc.coords.latitude,
              longitude: userLoc.coords.longitude,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034,
            }}
            provider="google"
          >
            <Marker
              coordinate={{
                latitude: userLoc.coords.latitude,
                longitude: userLoc.coords.longitude,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0034,
              }}
            />
          </MapView>
        )}
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          color={color.darkGreen}
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
      </View>
    </View>
  );
}
