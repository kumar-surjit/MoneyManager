import React, {Component} from 'react';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import {MenuProvider} from 'react-native-popup-menu';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MenuProvider>
          <Routes />
        </MenuProvider>
        <FlashMessage position="top" />
      </Provider>
    );
  }
}
