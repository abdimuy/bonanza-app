import {StyleSheet} from 'react-native';
import {PRIMARY_BLACK_BACKGROUND_COLOR} from '../../../constants/colors';

export const darkSaleDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
  },
  header: {
    padding: 16,
    backgroundColor: '#333',
  },
  list: {
    padding: 16,
  },
});

export const lightSaleDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK_BACKGROUND_COLOR,
  },
  header: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  list: {
    padding: 16,
  },
});
