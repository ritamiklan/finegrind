import React from "react";
import { View, Image, Text } from "react-native";
import { globalStyles } from "../styles/global";

// component to render individual list items on the main cafe list

export default function ListDetail({ listitem }) {
  return (
    <View style={globalStyles.listitemContainer}>
      <Text style={globalStyles.headerText}>{listitem.attributes.name}</Text>
      <Image
        style={globalStyles.listimage}
        source={{ uri: `${listitem.attributes.image}` }}
      />
    </View>
  );
}
