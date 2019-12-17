import React from 'react';
import { StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import { render } from 'react-dom';
import MyCards from './MyCards';
//style={{height:30,width:30,backgroundColor:"#25D366"}}
export default class Chats extends React.Component {
  render(){
  return (
   <View>
   <ScrollView>
   
        <MyCards name="Mayank"/>
        <MyCards name="Nitin"/>
        <MyCards name="Saurabh"/>
        <MyCards name="Gaurav"/>
        <MyCards name="Aman"/>
        <MyCards name="Mukesh"/>
        <MyCards name="Varun"/>
        <MyCards name="Tushar"/>
        <MyCards name="Ritik"/>
        <MyCards name="Naman"/>
        <MyCards name="Rajat"/>
        
     </ScrollView>
    </View>
  );
}
}