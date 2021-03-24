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
import {getDate} from '../../utils/helperFunctions';

export default class AddDetails extends Component {
  state = {
    category: this.props.route.params.type,
    date: new Date(),
    show: false,
    descriptionText: '',
    amountText: '',
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
    if (descriptionText !== '' && amountText !== '') {
      actions.add(data);
      showMessage({
        message: 'Successfully Added',
        description: 'Entry has been added successfully.',
        type: 'success',
      });
      this.props.navigation.goBack();
      // console.log(data);
    } else {
      showMessage({
        message: 'Empty Fields',
        description: 'Please fill the required fields',
        type: 'danger',
      });
    }
  };

  render() {
    const {category, date, show} = this.state;
    // console.log(date);
    return (
      <View style={{flex: 1}}>
        <View style={styles.appBarContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color="#fff"
                size={30}
              />
            </TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 20, marginLeft: 16}}>
              Add Details
            </Text>
          </View>
          <TouchableOpacity onPress={this.saveClicked}>
            <Text style={{color: '#fff', fontSize: 18}}>SAVE</Text>
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
            placeholder="Enter a description"
            keyboard="default"
            customStyle={styles.inputTextDescStyle}
            onChange={value => this.setState({descriptionText: value})}
          />
        </View>
        <View style={styles.amountContainer}>
          <View style={[styles.imageContainer, {height: 50}]}>
            <Image source={imagePath.ic_rupee} style={styles.inputIconStyle} />
          </View>
          <InputText
            placeholder="0.00"
            keyboard="numeric"
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
                label: 'Credit',
                value: 'Credit',
              },
              {
                label: 'Debit',
                value: 'Debit',
              },
            ]}
            placeholder="Please select a category"
            defaultValue={category}
            containerStyle={{
              height: 40,
              flex: 0.4,
              marginHorizontal: 30,
            }}
            style={{
              backgroundColor: '#fafafa',
              elevation: 5,
            }}
            itemStyle={{}}
            dropDownStyle={{backgroundColor: '#fafafa'}}
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

const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.themeGreen,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  imageContainer: {
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginRight: 16,
  },
  inputIconStyle: {
    width: 28,
    height: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  inputTextDescStyle: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 8,
    alignItems: 'flex-end',
  },
  inputTextAmountStyle: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },
  dateViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  dateStyle: {
    flex: 0.4,
    elevation: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    flexDirection: 'row',
  },
});
