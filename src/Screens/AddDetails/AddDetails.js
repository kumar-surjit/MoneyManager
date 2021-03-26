import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputText from '../../Components/InputText';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import actions from '../../redux/actions';
import {showMessage} from 'react-native-flash-message';
import {getDate, regexTest} from '../../utils/helperFunctions';
import styles from './styles';
import strings from '../../constants/lang';

export default class AddDetails extends Component {
  state = {
    category: this.props.route.params.type,
    date: this.props.route.params.item
      ? new Date(this.props.route.params.item.date)
      : new Date(),
    show: false,
    descriptionText: this.props.route.params.item
      ? this.props.route.params.item.description
      : '',
    amountText: this.props.route.params.item
      ? this.props.route.params.item.amount
      : '',
  };

  showMode = () => {
    this.setState({show: true});
  };

  onChange = (event, selectedDate) => {
    const {date} = this.state;
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    this.setState({date: currentDate, show: false});
    console.log(currentDate);
  };

  saveClicked = () => {
    const {category, descriptionText, amountText, date} = this.state;
    let data = {
      category,
      description: descriptionText,
      amount: amountText,
      date: date.toString(),
    };
    let message = '',
      desc = '',
      type = '';
    if (descriptionText !== '' && amountText !== '') {
      let amountPattern = /^\d+(\.*\d+)*$/;
      if (!regexTest(amountText, amountPattern)) {
        showMessage({
          message: 'Invalid Amount',
          description: 'Please fill a valid amount',
          type: 'danger',
        });
        return;
      }
      type = 'success';
      if (this.props.route.params.item) {
        data.id = this.props.route.params.item.id;
        console.log('TRUE', data);
        actions.updateItem(data);
        message = 'Successfully Updated';
        desc = 'Entry has been updated successfully.';
      } else {
        actions.add(data);
        message = 'Successfully Added';
        desc = 'Entry has been added successfully.';
        console.log('FALSE');
      }
      this.props.navigation.goBack();
      // console.log(data);
    } else {
      (message = 'Empty Fields'),
        (desc = 'Please fill the required fields'),
        (type = 'danger');
    }
    showMessage({
      message: message,
      description: desc,
      type: type,
    });
  };

  render() {
    console.log('PROPS: ', this.props);
    const {category, date, show, descriptionText, amountText} = this.state;
    // console.log(date);
    return (
      <View style={{flex: 1}}>
        <View style={styles.appBarContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={colors.white}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{color: colors.white, fontSize: 20, marginLeft: 16}}>
              {strings.ADD_DETAILS}
            </Text>
          </View>
          <TouchableOpacity onPress={this.saveClicked}>
            <Text style={{color: colors.white, fontSize: 18}}>
              {strings.SAVE}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 32, marginTop: 32}}>
          <View style={styles.imageContainer}>
            <Image
              source={imagePath.ic_description}
              style={styles.inputIconStyle}
            />
          </View>
          <InputText
            placeholder={strings.ENTER_DESCRIPTION}
            keyboard="default"
            value={descriptionText}
            customStyle={styles.inputTextDescStyle}
            onChange={value => this.setState({descriptionText: value})}
          />
        </View>
        <View style={styles.amountContainer}>
          <View style={[styles.imageContainer, {height: 50}]}>
            <Image source={imagePath.ic_rupee} style={styles.inputIconStyle} />
          </View>
          <InputText
            placeholder={strings.AMOUNT_PLACEHOLDER}
            keyboard="numeric"
            value={amountText}
            customStyle={styles.inputTextAmountStyle}
            onChange={value => this.setState({amountText: value})}
          />
        </View>
        <View style={styles.dateViewContainer}>
          <TouchableOpacity style={styles.dateStyle} onPress={this.showMode}>
            <Image
              source={imagePath.ic_calendar}
              style={{width: 25, height: 25, marginRight: 8}}
              tintColor={colors.themeGreen}
            />
            <Text style={{fontSize: 16, alignSelf: 'center'}}>
              {getDate(date)}
            </Text>
          </TouchableOpacity>
          <DropDownPicker
            items={[
              {
                label: strings.CREDIT,
                value: strings.CREDIT,
              },
              {
                label: strings.DEBIT,
                value: strings.DEBIT,
              },
            ]}
            placeholder={strings.SELECT_CATEGORY}
            defaultValue={category}
            containerStyle={{
              height: 40,
              flex: 0.4,
              marginHorizontal: 30,
            }}
            style={{
              backgroundColor: colors.dropdownWhite,
              elevation: 5,
            }}
            itemStyle={{}}
            dropDownStyle={{backgroundColor: colors.dropdownWhite}}
            onChangeItem={item => this.setState({category: item.value})}
            labelStyle={{fontSize: 20}}
          />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={this.onChange}
          />
        )}
      </View>
    );
  }
}
