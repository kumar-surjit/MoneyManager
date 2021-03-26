import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import HomeCard from '../../Components/HomeCard';
import actions from '../../redux/actions';
import styles from './styles';
import strings from '../../constants/lang';

class Home extends Component {
  getTotal = type => {
    let result = 0;
    if (this.props.list.length > 0) {
      this.props.list.forEach(singleEntry => {
        if (singleEntry.category === type) result += Number(singleEntry.amount);
      });
    }
    return result;
  };

  render() {
    // console.log(this.props.counter);
    return (
      <View style={{flex: 1}}>
        <View style={styles.cardsContainer}>
          <HomeCard
            label={strings.EXPENSE}
            total={this.getTotal(strings.DEBIT)}
            containerStyle={styles.expenseCardContainer}
            expenseTextStyle={styles.expenseHeadingText}
            expenseNumberStyle={styles.expenseNumberText}
          />
          <HomeCard
            label={strings.INCOME}
            total={this.getTotal(strings.CREDIT)}
            containerStyle={styles.expenseCardContainer}
            expenseTextStyle={styles.expenseHeadingText}
            expenseNumberStyle={styles.expenseNumberText}
          />
        </View>
        <HomeCard label={strings.INCOME} total="502" />
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.mainReducer.list,
  };
};
export default connect(mapStateToProps)(Home);
