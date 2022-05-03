import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import config from "../utils/config";

// detailed page for every individual cafe with all the details, such as name, opening hrs and so on

export default function CoffeeDetailScreen({ route }) {
  const { id } = route.params;

  const [cafe, setCafe] = useState({
    id: "",
    attributes: {
      name: "",
      description: "",
      address: "",
      roastery: "",
      image: "../../assets/coffee.jpg",
      openinghours: {
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
        sat: "",
        sun: "",
      },
    },
  });

  const getCafe = (id) => {
    fetch(config.API_URL + id)
      .then((response) => response.json())
      .then((dt) => setCafe(dt.data))
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    getCafe(id);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `${cafe.attributes.image}` }}
      />
      <View style={styles.details}>
        <Text>{cafe.attributes.name}</Text>
        <Text>{cafe.attributes.description}</Text>
        <Text>Hours: {cafe.attributes.openinghours.mon}</Text>
        <Text>Roastery: {cafe.attributes.roastery}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="View on map"
          onPress={() => console.log("pushed")}
        />
        <Button
          style={styles.button}
          title="IDK"
          onPress={() => console.log("idk")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "auto",
    height: 150,
  },
  details: {
    flex: 2,
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 50,
  },
  button: {},
});
