import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import DateTimePicker from '@react-native-community/datetimepicker';

class Home extends Component {
  state = {
    date: new Date(),
    show: false,
  };

  showMode = () => {
    this.setState({show: true});
  };

  onChange = (event, selectedDate) => {
    const {date} = this.state;
    console.log(selectedDate);
    selectedDate.format();
    const currentDate = selectedDate || date;
    this.setState({date: currentDate, show: false});
    // console.log(currentDate);
  };

  render() {
    const {date, show} = this.state;
    // console.log(this.props.counter);
    return (
      <View style={{flex: 1}}>
        <Text>This is Home Screen: {this.props.counter}</Text>
        <TouchableOpacity onPress={() => actions.add()}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showMode}>
          <Text>show</Text>
        </TouchableOpacity>
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
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.mainReducer.counter,
  };
};
export default connect(mapStateToProps)(Home);
