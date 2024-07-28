import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FixedNav() {
  return (
    <View style={styles.ElevatadFooter}>
      <Text>FixedNav</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ElevatadFooter:{
    borderRadius:10,
    backgroundColor:"#fff",
    height:70,
    margin:2,
 shadowOffset:{
    width:1,
    height:1,
 },
 shadowColor:"black",
 elevation:20
}
})