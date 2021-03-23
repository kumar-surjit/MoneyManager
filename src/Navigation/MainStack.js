import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import {Home} from '../Screens';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.Home}
        component={Home}
        options={{headerShown: false}}
      />
    </>
  );
}
