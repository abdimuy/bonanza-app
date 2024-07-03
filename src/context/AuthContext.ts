import {createContext} from 'react';
import {User} from 'firebase/auth';
import {ThemeContextType} from '../utils/themeUtils';
import {UserData} from '../api/auth/users/getUser';
import Ruta from '../types/Ruta';

export const AuthContext = createContext<{
  user: User | undefined;
  themeContext: ThemeContextType;
  userData: UserData | null;
  ruta: Ruta;
  loadingRuta: boolean;
}>({
  user: undefined,
  themeContext: {
    theme: 'light',
    toggleTheme: () => {},
  },
  userData: null,
  ruta: {
    id: '',
    name: '',
    number: 0,
    cobrador: '',
  },
  loadingRuta: true,
});
