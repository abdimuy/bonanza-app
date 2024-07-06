import {View, ViewStyle} from 'react-native';
import React from 'react';
import {useThemedStyles} from '../../hooks/useThemeStyles';
import {
  darkProgressBarStyles,
  lightProgressBarStyles,
} from './progressBar.styles';

interface ProgressBarProps {
  progress: number;
  style?: ViewStyle;
}

const ProgressBar = (props: ProgressBarProps) => {
  const {progress} = props;
  const styles = useThemedStyles({
    darkThemeStyles: darkProgressBarStyles,
    lightThemeStyles: lightProgressBarStyles,
  });

  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.progress, {width: `${progress}%`}]}></View>
    </View>
  );
};

export default ProgressBar;
