import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_COLOR,
  PRIMARY_BLACK_TEXT_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_LIGHT_TEXT_COLOR,
  SECONDARY_LIGHT_TEXT_COLOR,
} from '../../constants/colors';

export const lightTextStyles = StyleSheet.create({
  primary: {
    color: PRIMARY_LIGHT_TEXT_COLOR,
  },
  secondary: {
    color: SECONDARY_LIGHT_TEXT_COLOR,
  },
  tertiary: {
    color: PRIMARY_LIGHT_COLOR,
  },
});

export const darkTextStyles = StyleSheet.create({
  primary: {
    color: PRIMARY_BLACK_TEXT_COLOR,
  },
  secondary: {
    color: PRIMARY_BLACK_TEXT_COLOR,
  },
  tertiary: {
    color: PRIMARY_BLACK_COLOR,
  },
});
