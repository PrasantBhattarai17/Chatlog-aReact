import {  router, Stack, useGlobalSearchParams } from "expo-router";
import { Image,StyleSheet,Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { PeopleData } from "../src/utils/constants";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

export default function _layout() {
  const {id}=useGlobalSearchParams<{id:string}>();
  const filtered=PeopleData.filter((user)=>user?.name==id);
  return (
 <Stack>
    <Stack.Screen name="index" options={{headerShown:false}}/>
    <Stack.Screen name="create_user" options={{headerShown:false}}/>
    <Stack.Screen name="(drawer)" options={{headerShown:false}}/>
    <Stack.Screen name="[id]"   options={{
      headerBackVisible:false,
      headerTitle:()=><>
      <TouchableOpacity onPress={()=>router.back()}>
      <FontAwesome  name="angle-left" size={35} style={{marginRight:14,fontWeight:"bold"}}/>
      </TouchableOpacity>
      <Image style={styles.ImageStyle} source={{uri:filtered[0]?.image}}/>
      <View style={{flexDirection:"column"}}>
      <Text style={{fontSize:16,fontWeight:"bold"}}>{id}</Text>
      {(filtered[0]?.online)?<Text>online {filtered[0]?.lastOnline}</Text>:<Text>{filtered[0]?.lastOnline}</Text>}
      </View>
      </>
      ,
      headerRight:()=><>{filtered[0]?.online?
        <>
      <FontAwesome style={{color:"black",fontSize:25,marginRight:22}} name="video-camera"/>
      <FontAwesome style={{color:"black",fontSize:25,marginRight:20}} name="phone"/>    
    <FontAwesome style={{color:"green"}} name="circle"/>
        </>
        :
        <>
        <FontAwesome style={{color:"black",fontSize:25,marginRight:22}} name="video-camera"/>
        <FontAwesome style={{color:"black",fontSize:25,marginRight:20}} name="phone"/>
        <FontAwesome style={{color:"gray"}} name="circle"/>
        </>
        }
        </>
      
      }}
    />
 </Stack>
  );
}
 const styles =StyleSheet.create({
ImageStyle:{
 width:45,
 height:45,
 borderRadius:50,
 marginRight:5,
}
 }
 )
