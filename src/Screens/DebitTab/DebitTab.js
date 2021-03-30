import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FloatingButton from '../../Components/FloatingButton';
import navigationStrings from '../../constants/navigationStrings';
import {connect, connectAdvanced} from 'react-redux';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import styles from './styles';
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import {showMessage} from 'react-native-flash-message';
import ListItem from '../../Components/ListItem';
import commonStyles from '../../styles/commonStyles';

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
    // console.log('LONG PRESS CLICKED');
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

  onFilterPressed = () => {
    actions.filterEnteries();
  };

  _renderItem = ({item, index}) =>
    item.category === strings.DEBIT && (
      <ListItem item={item} navigation={this.props.navigation} />
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
        <FloatingButton
          onPress={this.add}
          iconName="plus"
          size={35}
          containerStyle={commonStyles.addButtonContainer}
        />
        {this.props.list.length > 1 && (
          <FloatingButton
            iconName="filter"
            size={30}
            containerStyle={commonStyles.filterButtonContainer}
            onPress={this.onFilterPressed}
          />
        )}
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
