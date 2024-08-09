import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../src/components/LoginAuth/Login'

export default function logout() {
  return (
    <View style={styles.WholeScreen}>
    <Login/>
    </View>
  )
}

const styles = StyleSheet.create({
  WholeScreen:{
    flex:1,
  }
})