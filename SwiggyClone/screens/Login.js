import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const boldTextOne = <Text style={styles.boldOne}>Terms & Conditions</Text>;
  const boldTextTwo = <Text style={styles.boldOne}>Privacy Poclicy</Text>;
  return (
    <View style={styles.loginContainer}>
      <Image source={require("../assets/arrow.png")}></Image>
      <View style={styles.ImageContainer}>
        <Text style={styles.textC}>LIVE FOR FOOD</Text>
      </View>
      <View style={styles.account}>
        <View style={styles.accountitems}>
          <Text style={styles.accountHeading}>ACCOUNT</Text>
          <Text style={styles.loginText}>
            Login/Create Account to manage orders
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttontext}>login</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By click I accept the {boldTextOne} & {boldTextTwo}
        </Text>
      </View>
      <View style={styles.hrLinke}></View>
      <View style={styles.offersContainer}>
        <View style={styles.offers}>
          <Text style={styles.symble}>%</Text>
          <Text style={styles.offersText}>Offers</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.hrLinkeTwo}></View>
      <View style={styles.feedbackContainer}>
        <View style={styles.feedback}>
          <Fontisto name="email" size={24} color="black" />
          <Text>Send Feedback</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.appVersion}>
        <Text style={styles.appText}> App version 5.0.4 (7)</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    marginTop: 20,
  },
  ImageContainer: {
    backgroundColor: "#F2F6FC",
    height: 200,
    display: "flex",
    justifyContent: "flex-end",
    padding: 50,
  },
  textC: {
    color: "#DDE0E8",
    fontSize: 40,
    width: 190,
    fontWeight: "800",
  },
  account: {
    display: "flex",

    gap: 20,
  },
  accountitems: {
    display: "flex",
    gap: 5,
  },
  accountHeading: {
    fontSize: 20,
    fontWeight: "700",
  },
  loginText: {
    color: "#888A95",
    fontWeight: "500",
    fontSize: 15,
  },
  buttons: {
    backgroundColor: "#fc801a",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttontext: {
    color: "#fff",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  termsText: {
    color: "#888A95",
    fontWeight: "600",
  },
  boldOne: {
    color: "#000",
    fontWeight: "700",
  },
  hrLinke: {
    borderBottomColor: "#7B7D84",
    borderBottomWidth: 1,
  },
  offersContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  offers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  symble: {
    borderWidth: 1,
    height: 22,
    textAlign: "center",
    width: 15,
  },
  offersText: {
    fontSize: 20,
    fontWeight: "600",
  },
  hrLinkeTwo: {
    borderBottomColor: "#7B7D84",
    borderBottomWidth: 3,
    borderStyle: "dotted",
  },
  feedbackContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feedback: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  appVersion: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F4F4F5",
    height: "100%",
    paddingTop: 10,
  },
  appText: {
    color: "#BDBFC4",
    fontSize: 20,
    fontWeight: "700",
  },
});
