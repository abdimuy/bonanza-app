import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {User, onAuthStateChanged} from 'firebase/auth';
import {auth} from './src/repositories/firebase';
import {AuthContext} from './src/context/AuthContext';
import Login from './src/modules/auth/login/Login';
import HomePage from './src/modules/home/homePage/HomePage';

export type RootDrawerParamList = {
  Home: undefined;
  // Sales: undefined;
  // DailyReport: undefined;
  // WeeklyReport: undefined;
  Login: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  if (loading) {
    // return <ActivityIndicator size="large" color="#0000ff" />;
  }
  // return <Login />;

  return (
    <AuthContext.Provider value={{user}}>
      <NavigationContainer>
        {user ? (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage} />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={Login} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
