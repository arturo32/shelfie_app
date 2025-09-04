import {StyleSheet, useColorScheme, View, ViewProps} from 'react-native'
import {Colors} from "../styles/colors";
import React from "react";


const ThemedLine = ({style, ...props} : ViewProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? 'light']

	return (
		<View
			style={[{borderBottomColor: theme.text}, styles.line, style]}
			{...props}
		></View>
	);
};

export default ThemedLine;

const styles = StyleSheet.create({
	line: {
		height: 0,
		borderWidth: 1,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		marginTop: 5,
		borderRadius: 0
	}
})
