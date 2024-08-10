import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../src/components/LoginAuth/Login'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'

export default function logout() {
  return (
    <View style={styles.WholeScreen}>
     <Text>Are ypu sure want to logout?</Text>
     <TouchableOpacity onPress={()=>router.navigate("/")}><Text>Log Out</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  WholeScreen:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})