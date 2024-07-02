import {StyleSheet} from 'react-native';
import {PRIMARY_BLACK_COLOR} from '../../contants/colors';

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
    color: 'black',
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
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
