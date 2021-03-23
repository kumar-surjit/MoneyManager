import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputText from '../../Components/InputText';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import DropDownPicker from 'react-native-dropdown-picker';

export default class AddDetails extends Component {
  state = {
    category: 'Credit',
  };
  render() {
    const {category} = this.state;
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
          <TouchableOpacity>
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
            customStyle={styles.inputTextDescStyle}
          />
        </View>
        <View style={styles.amountContainer}>
          <View style={[styles.imageContainer, {height: 50}]}>
            <Image source={imagePath.ic_rupee} style={styles.inputIconStyle} />
          </View>
          <InputText
            placeholder="0.00"
            customStyle={styles.inputTextAmountStyle}
          />
        </View>
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
            marginTop: 40,
            alignSelf: 'center',
            width: '40%',
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
});
