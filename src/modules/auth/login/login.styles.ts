import {StyleSheet} from 'react-native';
import {
  PRIMARY_BLACK_BACKGROUND_COLOR,
  PRIMARY_LIGHT_BACKGROUND_COLOR,
} from '../../../constants/colors';

const lightLoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_LIGHT_BACKGROUND_COLOR,
    padding: 20,
  },
});

const darkLoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
    padding: 20,
  },
});

export {lightLoginStyles, darkLoginStyles};
