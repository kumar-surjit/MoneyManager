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

  _renderItem = ({item, index}) =>
    item.category === strings.CREDIT && (
      <ListItem item={item} navigation={this.props.navigation} />
    );

  render() {
    // console.log(this.props.list);
    console.log();
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
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

export default connect(mapStateToProps)(CreditTab);
