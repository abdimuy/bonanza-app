import {Pressable, Text, ViewStyle} from 'react-native';
import React from 'react';
import {darkButtonStyles, lightButtonStyles} from './button.styles';
import {useThemedStyles} from '../../hooks/useThemeStyles';

interface ButtonProps {
  onPress?: () => void;
  children?: string;
  disabled?: boolean;
  width?: 'full' | 'auto';
  style?: ViewStyle;
}

const Button = (props: ButtonProps) => {
  const {
    children = '',
    onPress = () => {},
    disabled = false,
    width = 'auto',
    style = {},
  } = props;
  const styles = useThemedStyles({
    lightThemeStyles: lightButtonStyles,
    darkThemeStyles: darkButtonStyles,
  });
  return (
    <Pressable
      style={[
        styles.button,
        {
          opacity: disabled ? 0.6 : 1,
          width: width === 'full' ? '100%' : 'auto',
          ...style,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;
