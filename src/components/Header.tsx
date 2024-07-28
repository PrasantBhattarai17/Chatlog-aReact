import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <ScrollView style={{}}>
    <View style={styles.HeaderBox}>
  <Text style={styles.HeaderChat}>Chats</Text>
<Pressable>
    <Text style={styles.HeaderChat}>🔍</Text>
</Pressable>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    HeaderBox:{
        height:60,
        marginVertical:5,
        marginHorizontal:10,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    HeaderChat:{
        fontSize:20,
       fontWeight:"bold",

    }
});