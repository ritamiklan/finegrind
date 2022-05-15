import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";
import firebaseApp from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import useList from "../hooks/useList";
import { globalStyles } from "../styles/global";
import ListDetail from "../components/ListDetailComponent";

// User profile screen
// list favorites

export default function UserProfile({ navigation }) {
  const { uid, username } = useUser();
  const [coffeeList] = useList();

  const db = getDatabase(firebaseApp);
  const userRef = ref(db, "users/" + uid);
  let the_favs;
  let fav_ids = [];
  let fav_coffeelist = [];

  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    the_favs = data.favs;
    fav_ids = Object.keys(data.favs);
    fav_coffeelist = [];

    for (let i = 0; i < coffeeList.length; i++) {
      // console.log("CoffeeList Item = ", i, coffeeList[i].id);
      if (the_favs.hasOwnProperty(coffeeList[i].id)) {
        fav_coffeelist.push(coffeeList[i]);
      }
    }
  });

  return (
    <View style={globalStyles.container}>
      <Text>User profile screen</Text>
      <Text>Your username: {username}</Text>

      <Text>Your favorite cafés: </Text>
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
    </View>
  );
}
