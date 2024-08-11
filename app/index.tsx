import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Login from "../src/components/LoginAuth/Login";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function index() {
  return (
    <GestureHandlerRootView>
      <View style={styles.MainContainer}>
        {/* <Text onPress={()=>router.navigate("/(drawer)/(tabs)/Main")}>login</Text> */}
        <Login />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
