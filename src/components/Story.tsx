import { ScrollView, StyleSheet,Image, View,Text } from 'react-native'
import React from 'react';
import { PeopleData } from '../utils/constants';

export default function Story() {
  const frienddata=PeopleData;
  return (
    <ScrollView horizontal={true}>
      {frienddata.map(({image,name},index)=>(
      <View style={styles.profileUser}>
      <Image style={styles.userImage}
        key={index} 
        source={{ uri:image}}/>
       <Text style={styles.nameText}>{name.slice(0,4)}</Text>
        </View>
     ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  userImage:{
    height:60,
    width:60,
    borderRadius:50,
    marginHorizontal:7
  },
  nameText:{
textAlign:"center",
fontSize:14,
fontWeight:"400",
  },
  profileUser:{}

})