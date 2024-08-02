import { Pressable, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <ScrollView style={styles.WholeHeader}>
    <View style={styles.HeaderBox}>
  <Text style={styles.HeaderChat}>Messenger</Text>
<Pressable>
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
    WholeHeader:{
      marginVertical:25
    },
    SearchImage:{
      width:50,
      height:50,
      alignSelf:"center"
    }
});