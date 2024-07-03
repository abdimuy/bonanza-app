import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_BACKGROUND_COLOR,
  PRIMARY_LIGHT_BACKGROUND_COLOR,
} from '../../../constants/colors';

export const lightHomePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_LIGHT_BACKGROUND_COLOR,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const darkHomePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
