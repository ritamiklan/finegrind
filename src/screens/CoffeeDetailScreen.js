import React from "react";
import { View, Text, Image, Button } from "react-native";
import useId from "../hooks/useId";
import { globalStyles } from "../styles/global";
import { useUser } from "../context/UserContext";
import {
  firebaseRemoveFavs,
  firebaseSaveFavs,
} from "../utils/firebaseSaveFavs";
import color from "../styles/color";

// detailed page for every individual cafe with all the details, such as name, opening hrs and so on

export default function CoffeeDetailScreen({ route, navigation }) {
  const { id } = route.params;

  const [coffeeDetail] = useId(id);
  console.log(coffeeDetail);

  const { isLoggedIn, setFavs, favs, user, uid } = useUser();

  const addToFavs = (id) => {
    let new_favs = {};
    if (favs) new_favs = favs;
    new_favs[id] = 1;
    setFavs(new_favs);
  };

  const removeFav = (uid, id) => {
    console.log(id);
    // firebaseRemoveFavs(uid, id);
  };

  let buttons;
  if (isLoggedIn) {
    if (!favs || !favs.hasOwnProperty(id)) {
      buttons = (
        <View style={globalStyles.buttonContainer}>
          <Button
            title="View on map"
            color={color.darkGreen}
            onPress={() =>
              navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
            }
          />
          <Button
            title="Add to favs"
            color={color.darkGreen}
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
            title="View on map"
            color={color.darkGreen}
            onPress={() =>
              navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
            }
          />
          <Button
            title="Remove from favs"
            color={color.lightGreen}
            onPress={() => {
              const favId = coffeeDetail.attributes.id;
              removeFav(favId);
            }}
          />
        </View>
      );
    }
  } else {
    buttons = (
      <View style={globalStyles.buttonContainer}>
        <Button
          title="View on map"
          color={color.darkGreen}
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
        <Text style={globalStyles.plainText}>
          {coffeeDetail.attributes.description}
        </Text>
        <Text style={globalStyles.plainText}>Hours:</Text>
        <Text style={globalStyles.plainText}>
          Mon: {coffeeDetail.attributes.openinghours.mon}
        </Text>
        <Text style={globalStyles.plainText}>
          Tue: {coffeeDetail.attributes.openinghours.tue}
        </Text>
        <Text style={globalStyles.plainText}>
          Wed: {coffeeDetail.attributes.openinghours.wed}
        </Text>
        <Text style={globalStyles.plainText}>
          Thu: {coffeeDetail.attributes.openinghours.thu}
        </Text>
        <Text style={globalStyles.plainText}>
          Fri: {coffeeDetail.attributes.openinghours.fri}
        </Text>
        <Text style={globalStyles.plainText}>
          Sat: {coffeeDetail.attributes.openinghours.sat}
        </Text>
        <Text style={globalStyles.plainText}>
          Sun: {coffeeDetail.attributes.openinghours.sun}
        </Text>
        <Text style={globalStyles.plainText}>
          Roastery: {coffeeDetail.attributes.roasteries[0].name}
        </Text>
      </View>
      {buttons}
    </View>
  );
}
