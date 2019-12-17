import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';
import Chats from "./components/Chats";
import Status from "./components/Status";
import Calls from "./components/Calls";
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {Ionicons} from "@expo/vector-icons";

const MyTabs=  createMaterialTopTabNavigator(
    {
      Chats:  { screen:Chats} ,
      Status:{screen:  Status} ,
      Calls: {screen: Calls} ,
     },
    {
      initialRouteName: 'Chats',
      activeColor: '#fff',
      inactiveColor: 'grey',
      tabBarOptions:{
        style:{
          backgroundColor:"#075E54",
        },
      }
    },
    
   
  );
  const App= createStackNavigator({
    home:MyTabs,
  },
  {defaultNavigationOptions:{
    title:"WhatsApp",
    headerStyle:{
      backgroundColor:"#075E54",
    },
    headerTintColor:"#fff",
    headerBackTitleStyle:{
    fontWeight:"bold", 
    },
    headerRight:(
      <View style={{flexDirection:"row"}}>
          <Ionicons name="md-search" size={25} color="white"/>
          <Ionicons name="md-more" size={25} color="white" style={{marginLeft:20,marginRight:25}}/> 
      </View>
    )
  }
},


  )
  export default createAppContainer(App);

  
  