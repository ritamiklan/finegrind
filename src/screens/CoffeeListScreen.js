import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import useList from "../hooks/useList";
import ListDetail from "../components/ListDetail";

// screen for showing all the cafes listed
// maybe this will be changed to a component and added to welcome screen, not sure yet

const CoffeeListScreen = ({ navigation }) => {
  const [coffeeList] = useList();
  // console.log(coffeeList);
  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeList}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeDetail", {
                  id: item.id,
                })
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default CoffeeListScreen;
