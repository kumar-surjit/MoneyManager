import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';

export default function HomeCard(props) {
  console.log(props);
  const {
    label,
    total,
    containerStyle,
    expenseTextStyle,
    expenseNumberStyle,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={expenseTextStyle}>{label}</Text>
      <Text style={expenseNumberStyle}>₹{total}</Text>
    </View>
  );
}
