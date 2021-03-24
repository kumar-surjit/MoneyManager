import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
class Home extends Component {
  render() {
    // console.log(this.props.counter);
    return (
      <View style={{flex: 1}}>
        <Text>This is Home Screen: {this.props.counter}</Text>
        <TouchableOpacity onPress={() => actions.add()}>
          <Text>Add</Text>
        </TouchableOpacity>
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
