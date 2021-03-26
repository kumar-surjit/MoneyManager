import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  headingContainerStyle: {
    elevation: 5,
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignSelf: 'center',
    borderRadius: 4,
    marginVertical: 32,
  },
  flatListStyle: {
    backgroundColor: colors.white,
    elevation: 5,
    paddingHorizontal: 16,
  },
  itemContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.themeLighGray,
    borderBottomWidth: 1,
  },
  itemImageStyle: {width: 30, height: 30, flex: 0.1, resizeMode: 'contain'},
  iconsContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: colors.themeLighGray,
    borderLeftWidth: 1,
  },
  singleIconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
});
