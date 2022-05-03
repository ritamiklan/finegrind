import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import useList from "../hooks/useList";
import ListDetail from "../components/ListDetail";
import { globalStyles } from "../styles/global";

// screen for showing all the cafes listed
// maybe this will be changed to a component and added to welcome screen, not sure yet

const CoffeeListScreen = ({ navigation }) => {
  const [coffeeList] = useList();

  return (
    <View style={globalStyles.container}>
      <FlatList
        style={globalStyles.list}
        data={coffeeList}
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
};

export default CoffeeListScreen;
