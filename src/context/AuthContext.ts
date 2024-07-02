import {createContext} from 'react';
import {User} from 'firebase/auth';
import {ThemeContextType} from '../utils/themeUtils';

export const AuthContext = createContext<{
  user: User | null;
  themeContext: ThemeContextType;
}>({
  user: null,
  themeContext: {
    theme: 'light',
    toggleTheme: () => {},
  },
});
