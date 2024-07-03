import {View} from 'react-native';
import React, {useContext} from 'react';
import Text from '../../../components/text/Text';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import {lightHomePageStyles, darkHomePageStyles} from './homePage.styles';
import {AuthContext} from '../../../context/AuthContext';
import Button from '../../../components/button/Button';

const HomePage = () => {
  const styles = useThemedStyles({
    darkThemeStyles: darkHomePageStyles,
    lightThemeStyles: lightHomePageStyles,
  });
  const {
    userData,
    themeContext: {toggleTheme},
  } = useContext(AuthContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text
            size="small"
            style={{
              marginTop: 20,
              marginLeft: 20,
            }}>
            Hola,
          </Text>
          <Text
            size="large"
            weight="bold"
            style={{
              marginLeft: 20,
            }}>
            {userData?.name || ''}
          </Text>
        </View>
        <Button onPress={handleToggleTheme}>Cambiar Tema</Button>
      </View>

      <View></View>
    </View>
  );
};

export default HomePage;
