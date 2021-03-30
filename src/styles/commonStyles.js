import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default StyleSheet.create({
  addButtonContainer: {
    borderRadius: 30,
    backgroundColor: colors.themeOrange,
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 8,
    elevation: 10,
  },
  filterButtonContainer: {
    borderRadius: 30,
    backgroundColor: colors.themeGreen,
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    elevation: 10,
  },
});
