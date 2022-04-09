import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import config from "../utils/config";

export default function CoffeeList() {
  const [coffeeList, setCoffeeList] = useState([]);

  // should only render on the first load
  useEffect(() => {
    fetch(config.API_URL)
      .then((response) => response.json())
      .then((dt) => setCoffeeList(dt.data))
      .catch((err) => Alert.alert("Something went wrong"));
  }, []);

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
