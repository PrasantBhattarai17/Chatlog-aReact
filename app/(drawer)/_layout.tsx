import { StyleSheet,Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Drawer from "expo-router/drawer"
import Header from '../../src/components/Header'
export default function _layout() {
  return (
 <GestureHandlerRootView>
    <Drawer
    screenOptions={{
        headerShown:true,
        header:()=><Header/>
    }}>
<Drawer.Screen 
name='(tabs)'
options={{
    drawerLabel:'Home',
}}
>
</Drawer.Screen>
    </Drawer>
 </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})