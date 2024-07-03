import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_BACKGROUND_COLOR,
  PRIMARY_LIGHT_BACKGROUND_COLOR,
} from '../../constants/colors';

export const lightCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_LIGHT_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export const darkCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 10,
    borderColor: '#FFF',
    borderWidth: 1,
  },
});
