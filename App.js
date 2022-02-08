import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

export default function App() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('https://api.finegrind.app/cafes/')
    .then((response) => response.json())
    .then(dt => setCoffeeList(dt.data))
    .catch(err => Alert.alert('Something went wrong'));
  }
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Welcome!</Text>
      </View>
      <View style={{flex: 2}}>
      <FlatList
          data={coffeeList}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.attributes.name}</Text>
          )}
      />
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
