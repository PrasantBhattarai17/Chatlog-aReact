import { StyleSheet,Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Drawer from "expo-router/drawer"
import Header from '../../src/components/Header'
import { FontAwesome } from '@expo/vector-icons'
export default function _layout() {
  return (
 <GestureHandlerRootView>
    <Drawer
    screenOptions={{
        headerShown:true,
        header:()=><Header/>,
            }}>
     <Drawer.Screen 
        name='profile'
        options={{
            drawerLabel:'Profile',
            drawerIcon:()=><FontAwesome name='user' size={25}/>
        }}
        >
 </Drawer.Screen>
<Drawer.Screen 
name='(tabs)'
options={{
    drawerLabel:'Chats',
    drawerIcon:()=><FontAwesome name='comment' size={25}/>
}}
>
</Drawer.Screen>
<Drawer.Screen 
name='favorites'
options={{
    drawerLabel:'Favorites',
    drawerIcon:()=><FontAwesome name='star' size={25}/>

}}
>
</Drawer.Screen>

    </Drawer>
 </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})