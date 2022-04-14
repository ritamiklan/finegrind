import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import config from "../utils/config";

export default function CoffeeDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [cafe, setCafe] = useState({
    id: "",
    attributes: {
      name: "",
      address: "",
      image: "",
    },
  });
  console.log(id);
  console.log(cafe);

  const getCafe = (id) => {
    fetch(config.API_URL + id)
      .then((response) => response.json())
      .then((dt) => setCafe(dt.data))
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  useEffect(() => {
    getCafe(id);
  }, []);

  return (
    <View>
      <Text>{cafe.attributes.name}</Text>
      <Image
        style={{ width: 150, height: 100 }}
        source={{ uri: `${cafe.attributes.image}` }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
