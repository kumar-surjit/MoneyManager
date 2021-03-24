import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class FloatingButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.add()}>
        <MaterialCommunityIcons name="plus" color="#fff" size={35} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#FF652F',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 8,
    elevation: 10,
  },
});
