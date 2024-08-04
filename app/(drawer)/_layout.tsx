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
        drawerHideStatusBarOnOpen:true,
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
<Drawer.Screen 
name='notifications'
options={{
    drawerLabel:'Notifications',
    drawerIcon:()=><FontAwesome name='bell' size={25}/>

}}
>
</Drawer.Screen>
<Drawer.Screen 
name='settings'
options={{
    drawerLabel:'Settings',
    drawerIcon:()=><FontAwesome name='gear' size={25}/>

}}
>
    </Drawer.Screen>
<Drawer.Screen 
name='switchAc'
options={{
    drawerLabel:'Switch Account',
    drawerIcon:()=><FontAwesome name='angle-down' size={25}/>

}}
>
</Drawer.Screen>
<Drawer.Screen 
name='logout'
options={{
    drawerLabel:'Log Out',
    drawerIcon:()=><FontAwesome name='sign-out' size={25}/>

}}
>
</Drawer.Screen>

    </Drawer>
 </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})