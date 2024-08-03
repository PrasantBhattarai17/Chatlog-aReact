import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMessage from '../src/components/ChatMessage/HeaderMessage'
import { useGlobalSearchParams } from 'expo-router'
import ChatComponent from '../src/components/ChatMessage/Gifted_Chat';

export default function MessageBox() {
  const {id}=useGlobalSearchParams<{id:string}>();
  console.log(id);
  return (
    <View>
    <HeaderMessage name={id}/>
   <ChatComponent/>
     </View>
  )
}

const styles = StyleSheet.create({})