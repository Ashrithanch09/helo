import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const data = [
  { id: "1", name: "Milk", image: require("../assets/milk.jpg") },
  { id: "2", name: "Bread", image: require("../assets/bread.jpg") },
  { id: "3", name: "Eggs", image: require("../assets/eggs.jpg") },
  { id: "4", name: "Apples", image: require("../assets/apples.jpg") },
];

const Instamart = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Instamart;
