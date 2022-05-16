import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import useList from "../hooks/useList";
import ListDetail from "../components/ListDetailComponent";
import { globalStyles } from "../styles/global";

// screen for showing all the cafes listed

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
