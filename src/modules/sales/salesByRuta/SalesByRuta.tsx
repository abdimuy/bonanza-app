import {View} from 'react-native';
import React, {useContext} from 'react';
import Text from '../../../components/text/Text';
import {
  darkSalesByRutaStyles,
  lightSalesByRutaStyles,
} from './salesByRuta.style';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import {AuthContext} from '../../../context/AuthContext';

const SalesByRuta = () => {
  const styles = useThemedStyles({
    darkThemeStyles: darkSalesByRutaStyles,
    lightThemeStyles: lightSalesByRutaStyles,
  });
  const {userData, ruta} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text size="small">Ruta:</Text>
      <Text
        size="large"
        weight="bold"
        color="primary"
        style={{marginBottom: 16}}>{` ${ruta.number} - ${ruta.name}`}</Text>
    </View>
  );
};

export default SalesByRuta;
