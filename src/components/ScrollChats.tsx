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
    {frienddata.map(({image,name,unseen,status,time},index)=>(
    <View key={index} style={styles.aPersonChat}>
      <Image
      style={
        styles.imageUser
      }
      source={{
        uri:image
      }}
      />
      <View style={styles.Chats}>
        <Text>{name}</Text>
        <Text>{status}</Text>
      </View>
      <View style={styles.Figures}>
        <Text>{time}</Text>
        <Text>{unseen.toString()}</Text>
      </View>
    </View>
    ))};
    </ScrollView>
  )
}

const styles = StyleSheet.create({
chatsHeading:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginHorizontal:5
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
backgroundColor:"antiquewhite",
margin:2,
gap:2
},
Chats:{
  backgroundColor:"red",
  width:240

},
Figures:{

  backgroundColor:"yellow",
  marginRight:4,
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  width:52

},
imageUser:{
  height:60,
  width:60,
  borderRadius:50,
}


})