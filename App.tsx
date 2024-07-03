import React, {useMemo} from 'react';
import {ActivityIndicator, useColorScheme} from 'react-native';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {User, onAuthStateChanged} from 'firebase/auth';
import {auth} from './src/repositories/firebase';
import {AuthContext} from './src/context/AuthContext';
import Login from './src/modules/auth/login/Login';
import HomePage from './src/modules/home/homePage/HomePage';
import {Theme, getTheme, toggleTheme} from './src/utils/themeUtils';
import useGetUser from './src/hooks/useGetUser';

export type RootDrawerParamList = {
  Home: undefined;
  // Sales: undefined;
  // DailyReport: undefined;
  // WeeklyReport: undefined;
  Login: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('light');

  const {loading: LoadingUser, user: userData} = useGetUser(
    user?.email || '',
    user,
  );

  useEffect(() => {
    const loadTheme = async () => {
      const initialTheme = await getTheme(systemColorScheme || 'light');
      setTheme(initialTheme);
    };
    loadTheme();
  }, [systemColorScheme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => toggleTheme(theme, setTheme),
    }),
    [theme],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <AuthContext.Provider value={{user, themeContext: value, userData}}>
      <NavigationContainer>
        {user ? (
          <Drawer.Navigator
            screenOptions={{
              drawerType: 'slide',
              headerShown: false,
            }}
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage} />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator
            screenOptions={{
              drawerType: 'slide',
              headerShown: false,
            }}
            initialRouteName="Login">
            <Drawer.Screen name="Login" component={Login} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
