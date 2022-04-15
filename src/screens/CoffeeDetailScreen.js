import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import config from "../utils/config";

// detailed page for every individual cafe with all the details, such as name, opening hrs and so on

export default function CoffeeDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [cafe, setCafe] = useState({
    id: "",
    attributes: {
      name: "",
      address: "",
      image:
        "https://api.finegrind.app/media/images/2022/02/08/latte_6otEWhe.jpg",
    },
  });

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
