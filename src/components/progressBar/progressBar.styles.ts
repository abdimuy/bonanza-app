import {StyleSheet} from 'react-native';
import {
  PRIMARY_LIGHT_COLOR,
  PRIMARY_BLACK_COLOR,
  SECONDARY_BLACK_BACKGROUND_COLOR,
  SECONDARY_LIGHT_BACKGROUND_COLOR,
} from '../../constants/colors';

export const lightProgressBarStyles = StyleSheet.create({
  container: {
    height: 10,
    width: '100%',
    backgroundColor: SECONDARY_LIGHT_BACKGROUND_COLOR,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: PRIMARY_LIGHT_COLOR,
    height: '100%',
    borderRadius: 10,
  },
});

export const darkProgressBarStyles = StyleSheet.create({
  container: {
    height: 10,
    width: '100%',
    backgroundColor: SECONDARY_BLACK_BACKGROUND_COLOR,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: PRIMARY_BLACK_COLOR,
    borderRadius: 10,
  },
});
