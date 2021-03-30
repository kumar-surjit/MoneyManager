import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

export default class FloatingButton extends Component {
  render() {
    const {iconName, containerStyle, size} = this.props;
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => this.props.onPress()}>
        <MaterialCommunityIcons
          name={iconName}
          color={colors.white}
          size={size}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
