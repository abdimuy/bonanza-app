import {Text as TextRN, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {useThemedStyles} from '../../hooks/useThemeStyles';
import {darkTextStyles, lightTextStyles} from './text.styles';

interface TextProps {
  children?: ReactNode;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  weight?:
    | 'normal'
    | 'bold'
    | 'light'
    | 'extra-bold'
    | 'extra-light'
    | 'semi-bold';
  color?: 'primary' | 'secondary' | 'tertiary';
  style?: ViewStyle;
  align?: 'center' | 'left' | 'right';
  numberOfLines?: number;
}

const Text = (props: TextProps) => {
  const {
    size = 'medium',
    weight = 'normal',
    children,
    color = 'primary',
    style = {},
    align = 'left',
    numberOfLines,
  } = props;
  const styles = useThemedStyles({
    darkThemeStyles: darkTextStyles,
    lightThemeStyles: lightTextStyles,
  });
  const stylesColor =
    color === 'primary'
      ? styles.primary
      : color === 'secondary'
      ? styles.secondary
      : styles.tertiary;

  return (
    <TextRN
      numberOfLines={numberOfLines}
      style={[
        stylesColor,
        {
          fontSize:
            size === 'x-small'
              ? 14
              : size === 'small'
              ? 16
              : size === 'medium'
              ? 20
              : size === 'large'
              ? 24
              : 28,
          fontWeight:
            weight === 'normal'
              ? 'normal'
              : weight === 'bold'
              ? 'bold'
              : weight === 'light'
              ? '300'
              : weight === 'extra-bold'
              ? '800'
              : weight === 'extra-light'
              ? '200'
              : '600',
          textAlign: align,
        },
        style,
      ]}>
      {children}
    </TextRN>
  );
};

export default Text;
