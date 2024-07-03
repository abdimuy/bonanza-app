import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_TEXT_COLOR,
  PRIMARY_LIGHT_TEXT_COLOR,
  SECONDARY_BLACK_BACKGROUND_COLOR,
  SECONDARY_LIGHT_BACKGROUND_COLOR,
} from '../../constants/colors';

export const lightInputStyles = StyleSheet.create({
  input: {
    backgroundColor: SECONDARY_LIGHT_BACKGROUND_COLOR,
    color: PRIMARY_LIGHT_TEXT_COLOR,
    fontSize: 20,
    borderRadius: 10,
  },
});

export const darkInputStyles = StyleSheet.create({
  input: {
    backgroundColor: SECONDARY_BLACK_BACKGROUND_COLOR,
    color: PRIMARY_BLACK_TEXT_COLOR,
    fontSize: 20,
    borderRadius: 10,
  },
});
