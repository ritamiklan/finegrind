import React from "react";
import { View, Text, Image, Button } from "react-native";
import useId from "../hooks/useId";
import { globalStyles } from "../styles/global";

// detailed page for every individual cafe with all the details, such as name, opening hrs and so on

export default function CoffeeDetailScreen({ route, navigation }) {
  const { id } = route.params;

  const [coffeeDetail] = useId(id);

  return (
    <View style={globalStyles.container}>
      <Image
        style={globalStyles.image}
        source={{ uri: `${coffeeDetail.attributes.image}` }}
      />
      <View style={globalStyles.details}>
        <Text>{coffeeDetail.attributes.name}</Text>
        <Text>{coffeeDetail.attributes.description}</Text>
        <Text>Hours:</Text>
        <Text>Mon: {coffeeDetail.attributes.openinghours.mon}</Text>
        <Text>Tue: {coffeeDetail.attributes.openinghours.tue}</Text>
        <Text>Wed: {coffeeDetail.attributes.openinghours.wed}</Text>
        <Text>Thu: {coffeeDetail.attributes.openinghours.thu}</Text>
        <Text>Fri: {coffeeDetail.attributes.openinghours.fri}</Text>
        <Text>Sat: {coffeeDetail.attributes.openinghours.sat}</Text>
        <Text>Sun: {coffeeDetail.attributes.openinghours.sun}</Text>
        <Text>Roastery: {coffeeDetail.attributes.roastery}</Text>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          style={globalStyles.button}
          title="View on map"
          onPress={() =>
            navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
          }
        />
        <Button
          style={globalStyles.button}
          title="IDK"
          onPress={() => console.log("idk")}
        />
      </View>
    </View>
  );
}
