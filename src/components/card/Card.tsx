import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import {useThemedStyles} from '../../hooks/useThemeStyles';
import {darkCardStyles, lightCardStyles} from './card.styles';

interface CardProps {
  children?: string;
  style?: ViewStyle;
}

const Card = (props: CardProps) => {
  const {children, style} = props;
  const styles = useThemedStyles({
    darkThemeStyles: darkCardStyles,
    lightThemeStyles: lightCardStyles,
  });

  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
