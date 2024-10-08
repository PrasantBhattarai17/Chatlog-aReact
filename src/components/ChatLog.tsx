import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
// import Header from './Header';
import Story from './Story';
import ScrollChats from './ScrollChats';

export default function ChatLog() {
  return (
    <View style={styles.wholeContainer}>
      {/* <Header/> */}
      <ScrollView style={styles.mainContent}>
        <Story/>
        <ScrollChats />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  mainContent:{
    
  }
});
