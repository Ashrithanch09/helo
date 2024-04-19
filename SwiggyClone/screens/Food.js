import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import pathToImageOne from "../assets/path-to-image-1.jpg";
import pathToImageTwo from "../assets/path-to-image-2.jpg";

const data = [
  { id: "1", name: "Restaurant One", image: pathToImageOne },
  { id: "2", name: "Restaurant Two", image: pathToImageTwo },
  // Add more data as needed
];

const Food = () => {
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
  },
  image: {
    width: 200,
    height: 150,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default Food;
