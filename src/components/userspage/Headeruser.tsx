import { StyleSheet, Text, View,SafeAreaView, TextInput,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Headeruser() {
  return (
 <SafeAreaView>
    <View style={styles.HeaderBox}>
    <Text style={styles.HeadingText}>Friends</Text>
    <View style={styles.SearchBar}>
        <TextInput style={styles.InputBar}/>
        <TouchableOpacity style={styles.SearchImage}>
        <Image style={styles.SearchImage} source={{
  uri:"https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png"
}}></Image>
</TouchableOpacity>
    </View>
    </View>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    HeaderBox:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"space-evenly",
    backgroundColor:"#fff",
    height:200,
    },
    SearchBar:{
    height:100,
    backgroundColor:"#fff",
    width:360,
    flexDirection:"row",
    margin:2,
    marginBottom:7,
    },
    HeadingText:{
    marginHorizontal:18,
    marginTop:35,
    fontSize:26,
    fontWeight:"bold"
     },
    InputBar:{
     width:280,
     borderWidth:2,
     height:50,
     marginLeft:10,
     alignSelf:"center",
     borderRadius:7,
      },
      SearchImage:{
        width:70,
        height:70,
        alignSelf:"center",
        marginRight:6,
      }
    }
);