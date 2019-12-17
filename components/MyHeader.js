import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class MyHeader extends React.Component {
 
  render() {
    return (
      <Appbar.Header style={{backgroundColor:"#006600"}}>
        <Appbar.Content
          title="WhatsApp"
        />
      </Appbar.Header>
    );
  }
}
