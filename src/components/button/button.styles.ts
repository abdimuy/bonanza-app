import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_COLOR,
  PRIMARY_BLACK_TEXT_COLOR,
  SECONDARY_LIGHT_TEXT_COLOR,
} from '../../constants/colors';

export const lightButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_BLACK_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 'auto',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  buttonText: {
    color: SECONDARY_LIGHT_TEXT_COLOR,
    fontSize: 20,
    textAlign: 'center',
  },
});

export const darkButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_BLACK_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 'auto',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  buttonText: {
    color: PRIMARY_BLACK_TEXT_COLOR,
    fontSize: 20,
    textAlign: 'center',
  },
});
