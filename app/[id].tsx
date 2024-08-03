import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMessage from '../src/components/ChatMessage/HeaderMessage'
import GiftedChat from '../src/components/ChatMessage/GiftedChat'
import { useGlobalSearchParams } from 'expo-router'

export default function MessageBox() {
  const {id}=useGlobalSearchParams<{id:string}>();
  console.log(id);
  return (
    <View>
<HeaderMessage name={id}/>
<GiftedChat/>
   </View>
  )
}

const styles = StyleSheet.create({})