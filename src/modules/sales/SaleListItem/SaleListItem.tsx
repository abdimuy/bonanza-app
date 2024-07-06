import {Pressable, View} from 'react-native';
import React from 'react';
import {Sale} from '../../../types/Sale';
import {
  darkSaleListItemStyles,
  lightSaleListItemStyles,
} from './saleListItem.styles';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import Text from '../../../components/text/Text';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SalesStackParamList} from '../../../routers/salesRoutes';

type SalesScreenNavigationProp = StackNavigationProp<
  SalesStackParamList,
  'SalesByRuta'
>;

const SaleListItem = ({sale}: {sale: Sale}) => {
  const navigation = useNavigation<SalesScreenNavigationProp>();

  const styles = useThemedStyles({
    darkThemeStyles: darkSaleListItemStyles,
    lightThemeStyles: lightSaleListItemStyles,
  });

  const handlePress = () => {
    navigation.navigate('SaleDetails', {id: sale.id});
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.iconStatus}></View>
        <View>
          <Text size="medium" weight="bold" numberOfLines={1}>
            <Text size="medium" weight="bold" color="tertiary">
              {sale.noCuenta}
            </Text>{' '}
            {sale.infoClient.name} {sale.infoClient.lastName}
          </Text>
          <Text size="x-small" numberOfLines={1}>
            {sale.infoClient.street} {sale.infoClient.colonia}{' '}
            {sale.infoClient.city}, {sale.infoClient.state}
          </Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionRow}>
          <Text size="x-small">
            Ult. Pago{' '}
            <Text size="x-small" weight="bold">
              hace 2 días
            </Text>
          </Text>
          <Text size="x-small">
            Día cobro{' '}
            <Text size="x-small" weight="bold">
              {sale.dayPay}
            </Text>
          </Text>
        </View>

        <ProgressBar
          progress={80}
          style={{
            marginTop: 5,
          }}
        />

        <View style={styles.bottomSectionRow}>
          <Text size="small">
            Abonado{' '}
            <Text size="medium" weight="bold">
              $200
            </Text>
          </Text>
          <Text size="small">
            Saldo{' '}
            <Text size="medium" weight="bold">
              $500
            </Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SaleListItem;
