import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  expenseCardContainer: {
    backgroundColor: colors.white,
    elevation: 5,
    width: Dimensions.get('window').width / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
    borderRadius: 8,
  },
  expenseHeadingText: {fontSize: 16, marginTop: 16},
  expenseNumberText: {fontSize: 22, marginTop: 8},
});
