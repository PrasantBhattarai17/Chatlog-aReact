import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FixedNav() {
  return (
    <View style={styles.ElevatadFooter}>
      <TouchableOpacity>
  <Image style={styles.homeImage} source={{
    uri:"https://cdn-icons-png.flaticon.com/512/25/25694.png"
  }}/>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newChat}>
    <Image style={styles.newChatImg} source={{uri:"https://icon-library.com/images/white-plus-icon/white-plus-icon-8.jpg"}}/>
    <Text style={styles.newChatText}>New Chat</Text>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={styles.profileIcon} source={{
    uri:"https://cdn.iconscout.com/icon/free/png-256/free-profile-icon-download-in-svg-png-gif-file-formats--user-avatar-account-person-ui-and-ux-pack-interface-icons-2917913.png"
  }}/>
  </TouchableOpacity>
  
    </View>
  )
}

const styles = StyleSheet.create({
  ElevatadFooter:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:10,
    backgroundColor:"white",
    height:70,

 shadowOffset:{
    width:1,
    height:1,
 },
 shadowColor:"black",
 elevation:20
},
homeImage:{
  width:40,
  height:40,

},
newChat:{
  flexDirection:"row",
  backgroundColor:"#000",
  alignItems:"center",
  justifyContent:"space-evenly",
  width:120,
  height:40,
  borderRadius:10,
  marginLeft:4,
  
 shadowOffset:{
  width:1,
  height:1,
},
shadowColor:"black",
elevation:5
},
newChatImg:{
  width:20,
  height:20,
  margin:4,
},
newChatText:{
color:"white",
margin:4,
fontSize:16,
fontWeight:"bold"
},
profileIcon:{
  width:50,
  height:50,


}
})