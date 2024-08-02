import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function () {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor:"black",
    tabBarShowLabel:false
   }}>
    <Tabs.Screen name='index' options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome size={28} name='home' color={color}/>,
        
    }}/>
    <Tabs.Screen name='Newchat' options={{
        title:"Newchat",
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome size={28} name='plus' color={color}/>
        }}/>
    <Tabs.Screen name='NavBelow' options={{
        title:"Online",
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome size={28} name='user' color={color}/>
        }}/>
   </Tabs>
  )
}

const styles = StyleSheet.create({})