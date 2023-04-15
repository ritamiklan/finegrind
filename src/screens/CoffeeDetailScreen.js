import React from "react";
import { View, Text, Image, Button } from "react-native";
import useId from "../hooks/useId";
import { globalStyles } from "../styles/global";
import { useUser } from "../context/UserContext";
import { firebaseRemoveFavs, firebaseSaveFavs } from "../utils/firebaseFavs";
import color from "../styles/color";

// detailed page for every individual cafe with all the details, such as name, opening hrs and so on

export default function CoffeeDetailScreen({ route, navigation }) {
  const { id } = route.params;

  const [coffeeDetail] = useId(id);

  const { isLoggedIn, setFavs, favs, uid } = useUser();

  // setting favs to context
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
            title="View on map"
            color={color.mediumBlue}
            onPress={() =>
              navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
            }
          />
          <Button
            title="Add to favs"
            color={color.mediumBlue}
            onPress={() => {
              addToFavs(id);
              firebaseSaveFavs(favs, uid);
            }}
          />
        </View>
      );
    } else {
      buttons = (
        <View style={globalStyles.buttonContainer}>
          <Button
            title="View on map"
            color={color.mediumBlue}
            onPress={() =>
              navigation.navigate("ShowMap", { id: id, data: coffeeDetail })
            }
          />
          <Button
            title="Remove from favs"
            color={color.lightBlue}
            onPress={() => {
              firebaseRemoveFavs(uid, id);
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
          color={color.mediumBlue}
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
      </View>
      <View style={globalStyles.details}>
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
