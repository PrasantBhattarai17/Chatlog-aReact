import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { PeopleData } from '../../utils/constants';
import { router } from 'expo-router';
import * as Haptics from "expo-haptics"
export default function UserStatus() {
  const filteredIsOnPeopleData=PeopleData.filter((user)=>user?.online==true);
  const filteredAwayPeopleData=PeopleData.filter((user)=>user?.online==false);
  const handlePress=(name:string,status:string)=>{
    router.navigate("/"+name)
    console.log(name)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
  return (
        <View style={styles.AllUsers}>
     <View style={styles.OnlineUser}>
      <Text style={styles.UserText}>Online-{filteredIsOnPeopleData.length}</Text>
      <FontAwesome style={styles.circle} name='circle'/>  
           </View>
       {filteredIsOnPeopleData.map((user)=><TouchableOpacity onPress={()=>handlePress(user?.name,user?.status)}  key={user.uid}><View style={styles.UserBar}>
        <View style={styles.UserInfo}>
        <Image
         style={
        styles.imageUser
        }
        source={{ uri:user?.image}} />  
         <Text style={styles.NameText}>{user?.name}</Text>
        </View>
         <View style={styles.UserLine}>
        <Text style={styles.Name2Text}>{user.lastOnline}</Text>
        <FontAwesome style={styles.circle} name='circle'/>  
       </View>
        </View>
        </TouchableOpacity >
        )} 
     <View style={styles.OnlineUser}>
      <Text style={styles.UserText}>Away-{filteredAwayPeopleData.length}</Text>
      <FontAwesome style={{color:"gray"}} name='circle'/>  
           </View>
       {filteredAwayPeopleData.map((user)=><TouchableOpacity onPress={()=>handlePress(user?.name,user?.status)} key={user.uid}><View style={styles.UserBar}>
        <View style={styles.UserInfo}>
        <Image
         style={
        styles.imageUser
        }
        source={{ uri:user?.image}} />  
         <Text style={styles.NameText}>{user?.name}</Text>
        </View>
         <View style={styles.UserLineTwo}>
        <Text style={{fontSize:12}}>{user.lastOnline}</Text>
        <FontAwesome style={{color:"gray"}} name='circle'/>  
        </View>
        </View>
        </TouchableOpacity>
        )} 
        </View>
  )
}

const styles = StyleSheet.create({
    AllUsers:{
        backgroundColor:"#fff",
        width:359,
    },
    OnlineUser:{
      flex:1,
      flexDirection:"row",
      marginHorizontal:15,
      justifyContent:"space-between",
      alignItems:"center",
      marginVertical:5,
    },
    UserText:{
      fontSize:25,
      fontWeight:"bold",    
    },
    circle:{
      color:"#45CE30",
      fontSize:13
    },
    UserBar:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      height:60,
      alignItems:"center",
      margin:2,
      marginVertical:5,
      padding:3,
      elevation:1,
      borderRadius:2,
    },
    UserLine:{
      flexDirection:"row",
      marginHorizontal:10,
      justifyContent:"space-between",
      width:50,
      alignItems:"center"
      
    },
    UserLineTwo:{
      flexDirection:"row",
      marginHorizontal:10,
      justifyContent:"space-between",
      width:75,
      alignItems:"center"
      
    },
    NameText:{
        fontSize:15,
        fontWeight:"bold",
        marginHorizontal:10,   
    },
    Name2Text:{
        fontSize:15,
        fontWeight:"condensedBold",  
    },
    imageUser:{
      height:50,
      width:50,
      borderRadius:50,
      alignSelf:'center'
    },
    UserInfo:{
      flex:1,
      flexDirection:"row",
      alignItems:"center",
      padding:7
    }
});