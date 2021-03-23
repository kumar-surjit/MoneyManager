import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import {Home, AddDetails} from '../Screens';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.AddDetails}
        component={AddDetails}
        options={{headerShown: false}}
      />
    </>
  );
}
