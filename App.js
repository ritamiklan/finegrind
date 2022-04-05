import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import config from "./src/utils/config";

export default function App() {
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
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Welcome!</Text>
      </View>
      <View style={{ flex: 2 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* 

To do list:
- add photos to the database - added mock images
- split up the code to screens
- implement navigation between screens
- map screen with location
- make UI somewhat nice-ish

*/
