import {
  KeyboardType,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  ViewStyle,
} from 'react-native';
import React, {useContext} from 'react';
import {lightInputStyles, darkInputStyles} from './input.styles';
import {useThemedStyles} from '../../hooks/useThemeStyles';
import {AuthContext} from '../../context/AuthContext';
import {
  PRIMARY_BLACK_TEXT_COLOR,
  PRIMARY_LIGHT_TEXT_COLOR,
} from '../../constants/colors';

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  style?: ViewStyle;
  keyboardType?: KeyboardType;
  autocapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

const Input = ({
  placeholder,
  value,
  onChange,
  style = {},
  keyboardType,
  autocapitalize,
}: InputProps) => {
  const styles = useThemedStyles({
    darkThemeStyles: darkInputStyles,
    lightThemeStyles: lightInputStyles,
  });

  const {
    themeContext: {theme},
  } = useContext(AuthContext);

  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      keyboardType={keyboardType}
      autoCapitalize={autocapitalize}
      placeholderTextColor={
        theme === 'light' ? PRIMARY_LIGHT_TEXT_COLOR : PRIMARY_BLACK_TEXT_COLOR
      }
    />
  );
};

export default Input;
