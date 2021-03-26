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
  itemContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.themeLighGray,
    borderBottomWidth: 1,
  },
  flatListStyle: {
    backgroundColor: colors.white,
    elevation: 5,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
