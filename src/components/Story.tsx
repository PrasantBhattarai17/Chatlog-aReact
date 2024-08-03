import { ScrollView, StyleSheet,Image, View,Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { PeopleData } from '../utils/constants';

export default function Story() {
  const frienddata=PeopleData;
  return (
    <ScrollView style={styles.StoryBar} horizontal={true}>
      <View style={styles.profileUser}>
      <Image style={styles.userImage}
        source={{ uri:"https://static.vecteezy.com/system/resources/previews/024/758/073/original/simple-add-story-icon-the-icon-can-be-used-for-websites-print-templates-presentation-templates-illustrations-etc-free-vector.jpg"}}/>
       <Text style={styles.nameText}>Add Story</Text>
        </View>
      {frienddata.map(({image,name},index)=>(
      <View 
      key={index} 
      style={styles.profileUser}>
        <TouchableOpacity onPress={()=>alert(name)}>
      <Image style={styles.userImage}
        source={{ uri:image}}/>
       <Text style={styles.nameText}>{name.split(" ")[0]}</Text>
       </TouchableOpacity>
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
    marginHorizontal:6
  },
  nameText:{
textAlign:"center",
fontSize:14,
fontWeight:"400",
color:"black",
width:70
  },
  profileUser:{
    height:105
  }
,
StoryBar:{
  flex:1,
  height:90,
  marginVertical:10,
}
})