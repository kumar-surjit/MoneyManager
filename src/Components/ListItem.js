import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import actions from '../redux/actions';
import {formatStringToDate} from '../utils/helperFunctions';
import navigationStrings from '../constants/navigationStrings';
import {showMessage} from 'react-native-flash-message';
import ButtonWithIcon from '../Components/ButtonWithIcon';

export default function ListItem(props) {
  // console.log('PROPS: ', props);
  const {item} = props;

  const setSelected = newValue => {
    console.log('LONG PRESS CLICKED');
    item.isSelected = newValue;
    actions.updateItem(item);
  };

  const onEditPressed = () => {
    console.log(item);
    props.navigation.navigate(navigationStrings.AddDetails, {
      item,
      type: item.category,
    });
  };

  const onDeletePressed = () => {
    Alert.alert('Delete Entry', 'Are you sure, you want to delete?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          actions.deleteItem(item.id);
          showMessage({
            message: 'Delete Successfully',
            description: 'Entery Deleted Successfully!',
            type: 'success',
          });
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#F3F3F3',
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 8,
      }}>
      <View style={{paddingHorizontal: 16}}>
        <View style={styles.listContentContainer}>
          <Image source={imagePath.ic_dollar} style={styles.itemImageStyle} />
          <Text
            style={[
              {flex: 0.6, marginLeft: 16},
              item.isSelected && {flex: 0.3},
            ]}>
            {item.description}
          </Text>
          <Text style={{color: colors.themeLightGray, flex: 0.4}}>
            {formatStringToDate(item.date)}
          </Text>
          <Text style={{flex: 0.2, textAlign: 'right'}}>
            {item.category === 'Credit' ? '+' : '-'}
            {item.amount}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.45,
              backgroundColor: 'rgba(255, 0, 0,.5)',
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            <Text style={{textAlign: 'center', color: '#fff'}}>Delete</Text>
          </View>
          <View
            style={{
              flex: 0.45,
              backgroundColor: '#72B67B',
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            <Text style={{textAlign: 'center', color: '#fff'}}>Edit</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // <TouchableOpacity
    //   style={styles.itemContainer}
    //   onPress={() => setSelected(!item.isSelected)}>
    //   <View style={styles.listContentContainer}>
    //     <Image source={imagePath.ic_dollar} style={styles.itemImageStyle} />
    //     <Text
    //       style={[{flex: 0.6, marginLeft: 16}, item.isSelected && {flex: 0.3}]}>
    //       {item.description}
    //     </Text>
    //     <Text style={{color: colors.themeLightGray, flex: 0.4}}>
    //       {formatStringToDate(item.date)}
    //     </Text>
    //     <Text style={{flex: 0.2}}>
    //       {item.category === 'Credit' ? '+' : '-'}
    //       {item.amount}
    //     </Text>
    //   </View>
    //   {item.isSelected && (
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         justifyContent: 'space-evenly',
    //         marginTop: 8,
    //       }}>
    //       <ButtonWithIcon
    //         label="Edit"
    //         iconPath={imagePath.ic_edit}
    //         containerStyle={{
    //           ...styles.buttonStyle,
    //           backgroundColor: colors.iconEditColor,
    //         }}
    //       />
    //       <ButtonWithIcon
    //         label="Delete"
    //         iconPath={imagePath.ic_delete}
    //         containerStyle={{
    //           ...styles.buttonStyle,
    //           backgroundColor: colors.iconDeleteColor,
    //         }}
    //       />
    //     </View>
    //   )}
    //   {/* {item.isSelected && (
    //     <View style={styles.iconsContainer}>
    //       <TouchableOpacity
    //         hitSlop={{top: 8, bottom: 8, left: 8, right: 0}}
    //         onPress={() => onEditPressed(item)}>
    //         <Image
    //           source={imagePath.ic_edit}
    //           style={{...styles.singleIconStyle, marginLeft: 12}}
    //           tintColor={colors.iconEditColor}
    //         />
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         hitSlop={{top: 8, bottom: 8, left: 0, right: 8}}
    //         onPress={() => onDeletePressed(item.id)}>
    //         <Image
    //           source={imagePath.ic_delete}
    //           style={{...styles.singleIconStyle, marginRight: 0}}
    //           tintColor={colors.iconDeleteColor}
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   )}
    // </TouchableOpacity>*/}
  );
}

const styles = StyleSheet.create({
  headingContainerStyle: {
    elevation: 5,
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignSelf: 'center',
    borderRadius: 4,
    marginVertical: 32,
  },
  flatListStyle: {
    backgroundColor: colors.white,
    elevation: 5,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  itemContainer: {
    paddingVertical: 8,
    borderBottomColor: colors.themeLighGray,
    borderBottomWidth: 0.5,
  },
  listContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImageStyle: {width: 30, height: 30, flex: 0.1, resizeMode: 'contain'},
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: colors.themeLighGray,
    borderLeftWidth: 0.5,
  },
  singleIconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
  buttonStyle: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
