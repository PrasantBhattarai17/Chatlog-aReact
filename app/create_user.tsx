import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from '../src/components/LoginAuth/signUp'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function indexx() {
  return (
    <GestureHandlerRootView>
    <View style={styles.createContainer}>
 <SignUp/>
    </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  createContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  }
})