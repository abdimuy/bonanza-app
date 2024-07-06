import {StyleSheet} from 'react-native';
import {
  PRIMARY_LIGHT_BACKGROUND_COLOR,
  PRIMARY_LIGHT_TEXT_COLOR,
  SECONDARY_BLACK_BACKGROUND_COLOR,
  SUCCCCESS_COLOR,
} from '../../../constants/colors';

const lightSaleListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: PRIMARY_LIGHT_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 10,
    shadowColor: PRIMARY_LIGHT_TEXT_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 150,
    marginHorizontal: 10,
    gap: 10,
    overflow: 'hidden',
  },
  topSection: {
    flexDirection: 'row',
    gap: 10,
  },
  iconStatus: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: SUCCCCESS_COLOR,
  },
  bottomSection: {},
  bottomSectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});

const darkSaleListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: SECONDARY_BLACK_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 150,
    marginHorizontal: 10,
    gap: 10,
    overflow: 'hidden',
  },
  topSection: {
    flexDirection: 'row',
    gap: 10,
  },
  iconStatus: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: SUCCCCESS_COLOR,
  },
  bottomSection: {},
  bottomSectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export {lightSaleListItemStyles, darkSaleListItemStyles};
