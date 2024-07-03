import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_BACKGROUND_COLOR,
  PRIMARY_LIGHT_BACKGROUND_COLOR,
} from '../../../constants/colors';

export const lightSalesByRutaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_LIGHT_BACKGROUND_COLOR,
  },
});

export const darkSalesByRutaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
  },
});
