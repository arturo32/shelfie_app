import {StyleSheet, Text, TextProps, useColorScheme, ViewProps} from 'react-native'
import {Colors} from "../styles/colors";
import React from "react";

type ThemedTextProps = TextProps & {
	title?: boolean
}

const ThemedText = ({style, title = false, ...props} : ThemedTextProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? 'light'];
	const textColor = title ? theme.title : theme.text
	return (
		<Text
			style={[{color: textColor}, style]}
			{...props}
		/>
  );
};

export default ThemedText;

const styles = StyleSheet.create({})
