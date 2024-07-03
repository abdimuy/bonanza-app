import {ActivityIndicator, Alert, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Button from '../../../components/button/Button';
import {lightLoginStyles, darkLoginStyles} from './login.styles';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import {AuthContext} from '../../../context/AuthContext';
import Text from '../../../components/text/Text';
import Input from '../../../components/input/Input';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../repositories/firebase';

const Login = () => {
  const styles = useThemedStyles({
    darkThemeStyles: darkLoginStyles,
    lightThemeStyles: lightLoginStyles,
  });
  const {
    themeContext: {theme, toggleTheme},
  } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {})
        .catch(error => {
          console.log('error', error);
        });
      // navigation.navigate('Home' as never);
    } catch (error) {
      Alert.alert('Error en el inicio de sesión');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (value: string, type: 'email' | 'password') => {
    if (type === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text
        size="x-large"
        weight="bold"
        color="primary"
        style={{
          marginBottom: 40,
        }}>
        Iniciar Sesión
      </Text>
      <Input
        placeholder="Correo Electrónico"
        onChange={e => handleInputChange(e.nativeEvent.text, 'email')}
        value={email}
        style={{
          marginBottom: 20,
        }}
        keyboardType="email-address"
      />
      <Input
        placeholder="Contraseña"
        onChange={e => handleInputChange(e.nativeEvent.text, 'password')}
        value={password}
        style={{
          marginBottom: 40,
        }}
        keyboardType="default"
      />
      <Button width="full" onPress={handleLogin}>
        Ingresar
      </Button>
    </View>
  );
};

export default Login;
