import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Food" onPress={() => navigation.navigate("Food")} />
      <Button
        title="Instamart"
        onPress={() => navigation.navigate("Instamart")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap:20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F2F6FC",
  },
});

export default Home;
