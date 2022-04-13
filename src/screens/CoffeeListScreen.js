import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import useList from "../hooks/useList";
import ListDetail from "../components/ListDetail";

export default function CoffeeList() {
  const [coffeeList] = useList();

  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeList}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return <ListDetail listitem={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
