import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Headeruser from './Headeruser';
import UserStatus from './UserStatus';

export default function OnlineUsers() {
  return (
<ScrollView>
  <Headeruser/>
   <UserStatus/>
</ScrollView>
  )
}

const styles = StyleSheet.create({});