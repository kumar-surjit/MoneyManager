import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  expenseCardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    width: Dimensions.get('window').width / 1.1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 24,
    borderRadius: 8,
  },
  expenseHeadingText: {fontSize: 20, color: colors.white},
  expenseNumberText: {fontSize: 22, marginLeft: 16, color: colors.white},
});
