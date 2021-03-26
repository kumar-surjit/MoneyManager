import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.themeGreen,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  imageContainer: {
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginRight: 16,
  },
  inputIconStyle: {
    width: 28,
    height: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  inputTextDescStyle: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 8,
    alignItems: 'flex-end',
  },
  inputTextAmountStyle: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },
  dateViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  dateStyle: {
    flex: 0.4,
    elevation: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    flexDirection: 'row',
  },
});
