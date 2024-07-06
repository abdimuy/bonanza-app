import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SalesByRuta from '../modules/sales/salesByRuta/SalesByRuta';
import SaleDetails from '../modules/sales/saleDetails/SaleDetails';

export type SalesStackParamList = {
  SalesByRuta: undefined;
  SaleDetails: {id: string};
};

const Stack = createStackNavigator<SalesStackParamList>();

const SalesRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SalesByRuta" component={SalesByRuta} />
      <Stack.Screen name="SaleDetails" component={SaleDetails} />
    </Stack.Navigator>
  );
};

export default SalesRoutes;
