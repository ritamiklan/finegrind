import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import useList from "../hooks/useList";

export default function CoffeeList() {
  const [coffeeList] = useList;

  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeList}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.attributes.name}</Text>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: `${item.attributes.image}` }}
            />
          </View>
        )}
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
