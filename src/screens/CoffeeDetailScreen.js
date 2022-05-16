import React from "react";
import { View, Text, Image, Button } from "react-native";
import useId from "../hooks/useId";
import { globalStyles } from "../styles/global";
import { useUser } from "../context/UserContext";
import firebaseSaveFavs from "../utils/firebaseSaveFavs";

// detailed page for every individual cafe with all the details, such as name, opening hrs and so on

export default function CoffeeDetailScreen({ route, navigation }) {
  const { id } = route.params;

  const [coffeeDetail] = useId(id);

  const { isLoggedIn, setFavs, favs, user, uid } = useUser();

  const addToFavs = (id) => {
    let new_favs = {};
    if (favs) new_favs = favs;
    new_favs[id] = 1;
    setFavs(new_favs);
  };

  let buttons;
  if (isLoggedIn) {
    if (!favs || !favs.hasOwnProperty(id)) {
      buttons = (
        <View style={globalStyles.buttonContainer}>
          <Button
            style={globalStyles.button}
            title="View on map"
            color="#6D8B74"
            onPress={() =>
              navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
            }
          />
          <Button
            style={globalStyles.button}
            title="Add to favs"
            color="#6D8B74"
            onPress={() => {
              addToFavs(id);
              firebaseSaveFavs(user, favs, uid);
            }}
          />
        </View>
      );
    } else {
      buttons = (
        <View style={globalStyles.buttonContainer}>
          <Button
            style={globalStyles.button}
            title="View on map"
            color="#6D8B74"
            onPress={() =>
              navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
            }
          />
          <Button
            style={globalStyles.button}
            title="Added to favs!"
            color="#6D8B74"
            onPress={() => {}}
          />
        </View>
      );
    }
  } else {
    buttons = (
      <View style={globalStyles.buttonContainer}>
        <Button
          style={globalStyles.button}
          title="View on map"
          color="#6D8B74"
          onPress={() =>
            navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
          }
        />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Image
        style={globalStyles.image}
        source={{ uri: `${coffeeDetail.attributes.image}` }}
      />
      <View style={globalStyles.details}>
        <Text style={globalStyles.headerText}>
          {coffeeDetail.attributes.name}
        </Text>
        <Text>{coffeeDetail.attributes.description}</Text>
        <Text>Hours:</Text>
        <Text>Mon: {coffeeDetail.attributes.openinghours.mon}</Text>
        <Text>Tue: {coffeeDetail.attributes.openinghours.tue}</Text>
        <Text>Wed: {coffeeDetail.attributes.openinghours.wed}</Text>
        <Text>Thu: {coffeeDetail.attributes.openinghours.thu}</Text>
        <Text>Fri: {coffeeDetail.attributes.openinghours.fri}</Text>
        <Text>Sat: {coffeeDetail.attributes.openinghours.sat}</Text>
        <Text>Sun: {coffeeDetail.attributes.openinghours.sun}</Text>
        <Text>Roastery: {coffeeDetail.attributes.roasteries[0].name}</Text>
      </View>
      {buttons}
    </View>
  );
}
