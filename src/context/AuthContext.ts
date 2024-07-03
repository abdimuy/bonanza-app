import {createContext} from 'react';
import {User} from 'firebase/auth';
import {ThemeContextType} from '../utils/themeUtils';
import {UserData} from '../api/auth/users/getUser';

export const AuthContext = createContext<{
  user: User | undefined;
  themeContext: ThemeContextType;
  userData: UserData | null;
}>({
  user: undefined,
  themeContext: {
    theme: 'light',
    toggleTheme: () => {},
  },
  userData: null,
});
