import {useContext, useMemo} from 'react';
import {AuthContext} from '../context/AuthContext';

type ThemeStyles<T> = {
  lightThemeStyles: T;
  darkThemeStyles: T;
};

export const useThemedStyles = <T extends Record<string, any>>({
  lightThemeStyles,
  darkThemeStyles,
}: ThemeStyles<T>) => {
  const {
    themeContext: {theme},
  } = useContext(AuthContext);

  const styles = useMemo(() => {
    return theme === 'light' ? lightThemeStyles : darkThemeStyles;
  }, [theme, lightThemeStyles, darkThemeStyles]);

  return styles;
};
