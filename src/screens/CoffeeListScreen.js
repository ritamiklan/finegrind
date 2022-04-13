import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import useList from "../hooks/useList";
import ListDetail from "../components/ListDetail";

const CoffeeListScreen = ({ navigation }) => {
  const [coffeeList] = useList();
  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeList}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", { screen: "CoffeeDetail" })
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
