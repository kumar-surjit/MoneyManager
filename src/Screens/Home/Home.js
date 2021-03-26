import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../../constants/navigationStrings';
import {HomeTab, CreditTab, DebitTab} from '../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: colors.themeGreen}}>
        <Tab.Screen
          name={navigationStrings.HomeTab}
          component={HomeTab}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={imagePath.ic_home}
                style={{width: 22, height: 22, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name={navigationStrings.CreditTab}
          component={CreditTab}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={imagePath.ic_credit}
                style={{width: 22, height: 22, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
            tabBarLabel: 'Credit',
          }}
        />
        <Tab.Screen
          name={navigationStrings.DebitTab}
          component={DebitTab}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={imagePath.ic_debit}
                style={{width: 22, height: 22, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
            tabBarLabel: 'Debit',
          }}
        />
      </Tab.Navigator>
    );
  }
}
