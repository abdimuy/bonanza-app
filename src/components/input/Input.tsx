import {
  KeyboardType,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {lightInputStyles, darkInputStyles} from './input.styles';
import {useThemedStyles} from '../../hooks/useThemeStyles';

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

  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      keyboardType={keyboardType}
      autoCapitalize={autocapitalize}
    />
  );
};

export default Input;
