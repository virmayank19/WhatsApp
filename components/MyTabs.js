import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


const MyTabs=  createMaterialTopTabNavigator(
    {
      Chats:  Chats ,
      Status:  Status ,
      Calls:  Calls ,
    },
    {
      initialRouteName: 'Chats',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );
  export default createAppContainer(MyTabs);