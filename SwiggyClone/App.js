import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Food from "./screens/Food";
import Instamart from "./screens/Instamart";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Instamart" component={Instamart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* 
<SafeAreaView style={styles.container}>
</SafeAreaView> */
// import "react-native-gesture-handler";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import Login from "./screens/Login";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <SafeAreaView style={styles.container}>
//           <Stack.Screen name="Login" component={Login} />
//         </SafeAreaView>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
  },
});
