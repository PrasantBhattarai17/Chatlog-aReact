import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function _layout() {
  return (
 <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    <Stack.Screen name="[id]" options={{title:"[id]"}}/>
 </Stack>
  );
}

const styles = StyleSheet.create({})