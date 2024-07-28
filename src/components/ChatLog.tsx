import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './Header';
import Story from './Story';
import ScrollChats from './ScrollChats';
import FixedNav from './FixedNav';

export default function ChatLog() {
  return (
    <View>
   <Header/>
   <Story/>
   <ScrollChats/>
   <FixedNav/>
    </View>
  )
}

const styles = StyleSheet.create({});