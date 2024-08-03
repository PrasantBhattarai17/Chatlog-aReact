import { Pressable, ScrollView, StyleSheet, Text, View,Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const [showSearch,setShowSearch]=useState(false);
  return (
    <ScrollView style={styles.WholeHeader}>
    <View style={styles.HeaderBox}>
      <View style={styles.menubars}>
   <FontAwesome style={{fontSize:30}} name='bars'/>
  {(showSearch)? (<TextInput placeholder='Search User' style={styles.SearchInput}></TextInput>):<Text style={styles.HeaderChat}>Connectify</Text>}
    </View>
  <Pressable onPress={()=>setShowSearch(!showSearch)}>
<Image style={styles.SearchImage} source={{
  uri:"https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png"
}}></Image>
</Pressable>
</View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    HeaderBox:{
        height:60,
        marginVertical:5,
        marginHorizontal:5,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    HeaderChat:{
        fontSize:25,
       fontWeight:"bold",
    },
    SearchInput:{
   borderWidth:1,
   width:240,
   height:40,
   marginLeft:8,
   borderTopLeftRadius:30,
   borderBottomLeftRadius:30,
   borderTopRightRadius:30,
   borderBottomRightRadius:30,
   color:"black",
   backgroundColor:"#fff",
   shadowColor:"black",
   elevation:2,
   padding:7

    },
    WholeHeader:{
      marginVertical:25,
    },
    SearchImage:{
      width:60,
      height:60,
    },
    menubars:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      width:165,
    }
});