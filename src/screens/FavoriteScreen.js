import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";
import firebaseApp from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import useList from "../hooks/useList";
import { globalStyles } from "../styles/global";
import ListDetail from "../components/ListDetailComponent";

export default function UserProfile({ navigation }) {
  const { uid } = useUser();
  const [coffeeList] = useList();

  const db = getDatabase(firebaseApp);
  const userRef = ref(db, "users/" + uid);
  let the_favs;
  let fav_ids = [];
  let fav_coffeelist = [];

  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    the_favs = data.favs;

    if (!the_favs) return;
    fav_ids = Object.keys(the_favs);
    if (fav_ids.length == 0) return;

    fav_coffeelist = [];

    for (let i = 0; i < coffeeList.length; i++) {
      if (the_favs.hasOwnProperty(coffeeList[i].id)) {
        fav_coffeelist.push(coffeeList[i]);
      }
    }
  });

  let favlist;
  if (fav_coffeelist.length > 0) {
    favlist = (
      <FlatList
        style={globalStyles.list}
        data={fav_coffeelist}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeDetailScreen", { id: item.id })
              }
            >
              <ListDetail listitem={item} />
            </TouchableOpacity>
          );
        }}
      />
    );
  } else {
    favlist = (
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.plainText}>Such empty, much sad.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.plainText}>Your favorite cafés: </Text>
      </View>
      {favlist}
    </View>
  );
}
