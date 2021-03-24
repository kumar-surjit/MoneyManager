import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../styles/colors';

export default class InputText extends Component {
  state = {
    bottomBorderColor: colors.themeGray,
    bottomBorderWidth: 1,
  };

  onFocus = () => {
    this.setState({bottomBorderColor: colors.themeGreen, bottomBorderWidth: 3});
  };

  onBlur = () => {
    this.setState({bottomBorderColor: colors.themeGray, bottomBorderWidth: 1});
  };
  render() {
    const {placeholder, customStyle, keyboard} = this.props;
    const {bottomBorderColor, bottomBorderWidth} = this.state;
    return (
      <TextInput
        placeholder={placeholder}
        style={[
          customStyle,
          {
            borderBottomColor: bottomBorderColor,
            borderBottomWidth: bottomBorderWidth,
          },
        ]}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        keyboardType={keyboard}
        onChangeText={val => this.props.onChange(val)}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputTextStyle: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
  },
});
