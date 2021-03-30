import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import FloatingButton from '../../Components/FloatingButton';
import navigationStrings from '../../constants/navigationStrings';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import styles from './styles';
import strings from '../../constants/lang';
import ListItem from '../../Components/ListItem';
import commonStyles from '../../styles/commonStyles';
import actions from '../../redux/actions';

class CreditTab extends Component {
  add = () => {
    // console.warn('inside credit tab');
    this.props.navigation.navigate(navigationStrings.AddDetails, {
      type: strings.CREDIT,
    });
  };

  getTotal = () => {
    let result = 0;
    if (this.props.list.length > 0) {
      this.props.list.forEach(singleEntry => {
        if (singleEntry.category === strings.CREDIT)
          result += Number(singleEntry.amount);
      });
    }
    return result;
  };

  onFilterPressed = () => {
    actions.filterEnteries();
  };

  _renderItem = ({item, index}) =>
    item.category === strings.CREDIT && (
      <ListItem item={item} navigation={this.props.navigation} />
    );

  render() {
    console.log(this.props.list);
    console.log();
    return (
      <View style={{flex: 1}}>
        <View style={styles.headingContainerStyle}>
          <Text style={{textAlign: 'center', fontSize: 18}}>
            {strings.TOTAL_CREDIT} : {this.getTotal()}
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

export default connect(mapStateToProps)(CreditTab);
