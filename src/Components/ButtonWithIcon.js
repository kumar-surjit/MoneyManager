import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default class ButtonWithIcon extends Component {
  render() {
    const {iconPath, label, containerStyle} = this.props;
    return (
      <TouchableOpacity style={containerStyle}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={iconPath}
            style={{...styles.singleIconStyle}}
            tintColor={colors.white}
          />
          <Text style={{color: colors.white, fontSize: 14}}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  singleIconStyle: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 8,
  },
});
