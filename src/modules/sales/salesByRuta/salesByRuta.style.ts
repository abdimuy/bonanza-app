import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_BACKGROUND_COLOR,
  PRIMARY_LIGHT_COLOR,
  SECONDARY_LIGHT_BACKGROUND_COLOR,
} from '../../../constants/colors';

export const lightSalesByRutaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_LIGHT_BACKGROUND_COLOR,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: PRIMARY_LIGHT_COLOR,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  list: {
    gap: 15,
    paddingTop: 15,
  },
});

export const darkSalesByRutaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: PRIMARY_LIGHT_COLOR,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  list: {
    paddingTop: 15,
    gap: 15,
  },
});
