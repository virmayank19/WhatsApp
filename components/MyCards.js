import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { Appbar,Card,Title } from 'react-native-paper';


export default function MyCards(props) {

return (
    <View>
      <Card >
         <View style={{flexDirection:"row",padding:0,height:70,paddingLeft:5}}>
             <View style={{height:60,width:60,borderRadius:30}}>  
             <Image  style={{height:60,width:60,borderRadius:30}}
              source={require('./pics/dp.png')}/>
              </View>
              <View style={{borderColor:"#ebebe0",borderTopWidth:2,width:900}}>
               <Card.Content>
                   <Title >{props.name}</Title>
               </Card.Content>
              </View>
             
         </View>  
      </Card>
    </View>
 
   );
  }

