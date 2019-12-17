import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { render } from 'react-dom';
import { Appbar,Card,Title,Paragraph } from 'react-native-paper';

export default class Status extends React.Component {
  render(){
  return (
    <View >
    <Card>
        <View style={{flexDirection:"row",padding:0,height:70,paddingLeft:5}}>
             <View style={{height:60,width:60,borderRadius:30}}>  
             <Image  style={{height:60,width:60,borderRadius:30}}
              source={require('./pics/dp.png')}/>
              </View>
              <View style={{borderColor:"#ebebe0",borderTopWidth:2,width:900}}>
               <Card.Content>
                   <Title >My Status</Title>
                   <Paragraph>Tap To Add Status</Paragraph>
               </Card.Content>
              </View>
             
         </View>
          
    </Card>
     <View style={{height:30,backgroundColor:"#ECE5DD",}}>
      <Text style={{color:"black",paddingTop:5,paddingLeft:30}}>Recently Viewed</Text>
     </View>

    </View>
  );
}
}