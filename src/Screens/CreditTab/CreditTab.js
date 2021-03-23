import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FloatingButton from '../../Components/FloatingButton';
import navigationStrings from '../../constants/navigationStrings';

export default class Credit extends Component {
  add = () => {
    console.warn('inside credit tab');
    this.props.navigation.navigate(navigationStrings.AddDetails);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>This is Credit Screen</Text>
        <FloatingButton add={this.add} />
      </View>
    );
  }
}
