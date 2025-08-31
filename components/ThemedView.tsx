import {StyleProp, StyleSheet, useColorScheme, View, ViewProps, ViewStyle} from 'react-native'
import {Colors} from "../styles/colors";
import React, {ReactElement, ReactNode} from "react";

type ThemeViewProps = {
  style?: StyleProp<ViewStyle>,
  props?: ViewProps,
  children?: ReactNode
}

const ThemedView = ({style, ...props} : ThemeViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light']

  return (
    <View
        style={[{backgroundColor: theme.background}, style]}
        {...props}
    />
  );
};

export default ThemedView;

const styles = StyleSheet.create({})
