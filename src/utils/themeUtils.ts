import AsyncStorage from '@react-native-async-storage/async-storage';

export type Theme = 'light' | 'dark';
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const getTheme = async (systemColorScheme: Theme): Promise<Theme> => {
  const savedTheme = (await AsyncStorage.getItem('theme')) as Theme | null;
  return savedTheme ? savedTheme : systemColorScheme;
};

export const toggleTheme = async (
  currentTheme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
) => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  await AsyncStorage.setItem('theme', newTheme);
};
