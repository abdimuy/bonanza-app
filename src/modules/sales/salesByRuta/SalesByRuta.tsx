import {ScrollView, View, ActivityIndicator, TextInput} from 'react-native';
import React, {useContext} from 'react';
import Text from '../../../components/text/Text';
import {
  darkSalesByRutaStyles,
  lightSalesByRutaStyles,
} from './salesByRuta.style';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import {AuthContext} from '../../../context/AuthContext';
import useGetSales from '../../../hooks/useGetSales';
import SaleListItem from '../SaleListItem/SaleListItem';
import Input from '../../../components/input/Input';

const SalesByRuta = () => {
  const styles = useThemedStyles({
    darkThemeStyles: darkSalesByRutaStyles,
    lightThemeStyles: lightSalesByRutaStyles,
  });
  const {ruta} = useContext(AuthContext);

  const {sales, loading} = useGetSales(ruta.number);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text size="small" color="secondary">
          Ruta:
        </Text>
        <Text
          size="large"
          weight="bold"
          color="secondary"
          style={{marginBottom: 16}}>
          {` ${ruta.number} - ${ruta.name}`}
        </Text>
        <Input
          placeholder="Buscar por nombre o número de cuenta"
          style={{marginBottom: 20}}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.list}>
          {sales.map(sale => (
            <SaleListItem key={sale.id} sale={sale} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SalesByRuta;
