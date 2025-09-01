import {StyleSheet, useColorScheme, View, ViewProps} from 'react-native'
import {Colors} from "../styles/colors";
import React from "react";


const ThemedCard = ({style, ...props} : ViewProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? 'light']

	return (
		<View
			style={[{backgroundColor: theme.uiBackground}, styles.card, style]}
			{...props}
		/>
	);
};

export default ThemedCard;

const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		padding: 20
	}
})
