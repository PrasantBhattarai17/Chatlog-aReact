import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function () {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor:"black",
    tabBarShowLabel:true
   }}>
    <Tabs.Screen name='index' options={{
        title:"Chats",
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome size={28} name='comment' color={color}/>,
        
    }}/>
    <Tabs.Screen name='Newchat' options={{
        title:"Stories",
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome size={28} name='plus' color={color}/>
        }}/>
    <Tabs.Screen name='NavBelow' options={{
        title:"People",
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome size={28} name='users' color={color}/>
        }}/>
   </Tabs>
  )
}

const styles = StyleSheet.create({})