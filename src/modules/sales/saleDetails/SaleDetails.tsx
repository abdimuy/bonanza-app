import {View, Text} from 'react-native';
import React from 'react';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import {
  darkSaleDetailsStyles,
  lightSaleDetailsStyles,
} from './saleDetails.styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SalesStackParamList} from '../../../routers/salesRoutes';

type SaleDetailScreenRouteProp = RouteProp<SalesStackParamList, 'SaleDetails'>;

const SaleDetails = () => {
  const route = useRoute<SaleDetailScreenRouteProp>();
  const {id} = route.params;

  const styles = useThemedStyles({
    darkThemeStyles: darkSaleDetailsStyles,
    lightThemeStyles: lightSaleDetailsStyles,
  });

  return (
    <View style={styles.container}>
      <Text>SaleDetails {id}</Text>
    </View>
  );
};

export default SaleDetails;
