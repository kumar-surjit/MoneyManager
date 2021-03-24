import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import FloatingButton from '../../Components/FloatingButton';
import navigationStrings from '../../constants/navigationStrings';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {formatStringToDate} from '../../utils/helperFunctions';

class DebitTab extends Component {
  state = {
    isItemActionsVisible: false,
  };
  add = () => {
    // console.warn('inside debit tab');
    this.props.navigation.navigate(navigationStrings.AddDetails, {
      type: 'Debit',
    });
  };

  getTotal = () => {
    let result = 0;
    if (this.props.list.length > 0) {
      this.props.list.forEach(singleEntry => {
        if (singleEntry.category === 'Debit')
          result += Number(singleEntry.amount);
      });
    }
    return result;
  };

  _renderItem = ({item, index}) =>
    item.category === 'Debit' && (
      <View
        style={{
          paddingVertical: 8,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#c5c5c5',
          borderBottomWidth: 1,
        }}>
        <Image
          source={imagePath.ic_dollar}
          style={{width: 30, height: 30, flex: 0.1, resizeMode: 'contain'}}
        />
        <Text style={{flex: 0.6, marginLeft: 16}}>{item.description}</Text>
        <Text style={{color: colors.themeGray, flex: 0.4}}>
          {formatStringToDate(item.date)}
        </Text>
        <Text style={{flex: 0.2}}>-{item.amount}</Text>
      </View>
    );

  render() {
    // console.log(this.props.list);
    console.log();
    const {isItemActionsVisible} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: colors.themeWhite}}>
        <View style={styles.headingContainerStyle}>
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Total Debit : {this.getTotal()}
          </Text>
        </View>
        <FlatList
          data={this.props.list}
          renderItem={this._renderItem}
          style={{
            backgroundColor: colors.themeWhite,
            elevation: 5,
            paddingHorizontal: 16,
            marginHorizontal: 16,
            marginBottom: 16,
          }}
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

const styles = StyleSheet.create({
  headingContainerStyle: {
    elevation: 5,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignSelf: 'center',
    borderRadius: 4,
    marginVertical: 32,
  },
});
