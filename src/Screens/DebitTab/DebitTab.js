import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FloatingButton from '../../Components/FloatingButton';

export default class Debit extends Component {
  add = () => {
    console.warn('inside debit tab');
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>This is Debit Screen</Text>
        <FloatingButton add={this.add} />
      </View>
    );
  }
}
