import React from "react";
import { View, Image, Text } from "react-native";

// component to render individual list items on the main cafe list

export default function ListDetail({ listitem }) {
  return (
    <View>
      <Text>{listitem.attributes.name}</Text>
      <Image
        style={{ width: "auto", height: 50 }}
        source={{ uri: `${listitem.attributes.image}` }}
      />
    </View>
  );
}
