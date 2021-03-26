import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import FloatingButton from '../../Components/FloatingButton';
import navigationStrings from '../../constants/navigationStrings';
import {connect, connectAdvanced} from 'react-redux';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {formatStringToDate} from '../../utils/helperFunctions';
import styles from './styles';
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import {showMessage} from 'react-native-flash-message';
import ListItem from '../../Components/ListItem';

class DebitTab extends Component {
  add = () => {
    // console.warn('inside debit tab');
    this.props.navigation.navigate(navigationStrings.AddDetails, {
      type: strings.DEBIT,
    });
  };

  getTotal = () => {
    let result = 0;
    if (this.props.list.length > 0) {
      this.props.list.forEach(singleEntry => {
        if (singleEntry.category === strings.DEBIT)
          result += Number(singleEntry.amount);
      });
    }
    return result;
  };

  setSelected = (item, newValue) => {
    console.log('LONG PRESS CLICKED');
    item.isSelected = newValue;
    actions.updateItem(item);
  };

  onEditPressed = item => {
    console.log(item);
    this.props.navigation.navigate(navigationStrings.AddDetails, {
      item,
      type: item.category,
    });
  };

  onDeletePressed = id => {
    Alert.alert('Delete Entry', 'Are you sure, you want to delete?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          actions.deleteItem(id);
          showMessage({
            message: 'Delete Successfully',
            description: 'Entery Deleted Successfully!',
            type: 'success',
          });
        },
      },
    ]);
  };

  _renderItem = ({item, index}) =>
    item.category === strings.DEBIT && (
      <ListItem item={item} navigation={this.props.navigation} />
      // <TouchableOpacity
      //   style={styles.itemContainer}
      //   onLongPress={() => this.setSelected(item, true)}
      //   delayLongPress={500}
      //   onPress={() => this.setSelected(item, false)}>
      //   <Image source={imagePath.ic_dollar} style={styles.itemImageStyle} />
      //   <Text style={{flex: 0.6, marginLeft: 16}}>{item.description}</Text>
      //   <Text style={{color: colors.themeGray, flex: 0.4}}>
      //     {formatStringToDate(item.date)}
      //   </Text>
      //   <Text style={{flex: 0.2}}>-{item.amount}</Text>
      //   {item.isSelected && (
      //     <View style={styles.iconsContainer}>
      //       <TouchableOpacity
      //         hitSlop={{top: 8, bottom: 8, left: 8, right: 0}}
      //         onPress={() => this.onEditPressed(item)}>
      //         <Image
      //           source={imagePath.ic_edit}
      //           style={styles.singleIconStyle}
      //           tintColor={colors.iconEditColor}
      //         />
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         hitSlop={{top: 8, bottom: 8, left: 0, right: 8}}
      //         onPress={() => this.onDeletePressed(item.id)}>
      //         <Image
      //           source={imagePath.ic_delete}
      //           style={styles.singleIconStyle}
      //           tintColor={colors.iconDeleteColor}
      //         />
      //       </TouchableOpacity>
      //     </View>
      //   )}
      // </TouchableOpacity>
    );

  render() {
    // console.log(this.props.list);
    console.log();
    return (
      <View style={{flex: 1, backgroundColor: colors.themeWhite}}>
        <View style={styles.headingContainerStyle}>
          <Text style={{textAlign: 'center', fontSize: 18}}>
            {strings.TOTAL_DEBIT} : {this.getTotal()}
          </Text>
        </View>
        <FlatList
          data={this.props.list}
          renderItem={this._renderItem}
          style={styles.flatListStyle}
        />
        <FloatingButton add={this.add} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.mainReducer.list,
  };
};

export default connect(mapStateToProps)(DebitTab);
