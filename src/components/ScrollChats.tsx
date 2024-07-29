import { Pressable, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import { PeopleData } from '../utils/constants';

export default function ScrollChats() {
  const frienddata=PeopleData;
  return (
    <ScrollView>
    <View style={styles.chatsHeading}>
      <Text style={styles.HeadingChat}>Chats</Text>
       <Pressable>
    <Image 
    style={styles.MoreIcon}
    source={{
      uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-DnzvxB-2thm3lo4CWVnwFK2VKEcuTkSwQ&s"
    }}
    />
       </Pressable>
    </View>
    {frienddata.map(({image,name,status,unseen,time},index)=>(
    <View key={index} style={styles.aPersonChat}>
      <Image
      style={
        styles.imageUser
      }
      source={{ uri:image}} />
      <View style={styles.Chats}>
        <Text style={styles.NameText}>{name}</Text>
        <Text style={styles.messageText}>{status}</Text>
      </View>
      <View style={styles.Figures}>
        <Text style={styles.Figuretext}>{time}</Text>
        <Text style={styles.unseenStyle}>{unseen.toString()}</Text>
      </View>
    </View>
    ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
chatsHeading:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginHorizontal:5,
marginVertical:10
},
HeadingChat:{
fontSize:20,
fontWeight:"bold",
paddingHorizontal:10,
},
MoreIcon:{
  height:30,
  width:30,
},
aPersonChat:{
flexDirection:"row",
justifyContent:"space-between",
margin:2,
marginVertical:5,
gap:2
},
Chats:{
  width:210
},
Figures:{
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  width:60,
},
imageUser:{
  height:60,
  width:60,
  borderRadius:50,
},
Figuretext:{
  fontSize:12,
  textAlign:"center",
  marginVertical:7
},
unseenStyle:{
  fontSize:12,
  backgroundColor:"black",
  color:"#ffffff",
  height:20,
  width:20,
  borderRadius:45,
  textAlign:"center"

},
NameText:{
  fontSize:16,
  fontWeight:"bold",
  marginHorizontal:4,
  marginVertical:5
},
messageText:{
  fontSize:14,
  marginHorizontal:4,
  fontWeight:"500"
}

})