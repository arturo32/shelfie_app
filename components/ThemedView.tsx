import {SafeAreaView, StyleSheet, useColorScheme, View, ViewProps} from 'react-native'
import {Colors} from "../styles/colors";
import React from "react";
import {globalStyle} from "../styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";


type ThemedViewProps = ViewProps & {
	safe?: boolean
}

const ThemedView = ({style, safe = false, ...props} : ThemedViewProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? 'light'];

	if(safe) {
		const insets = useSafeAreaInsets();
		return (
			<View
				style={[{
					backgroundColor: theme.background,
					paddingTop: insets.top,
					paddingBottom: insets.bottom
				}, globalStyle.container, style]}
				{...props}
			/>
		);
	} else {

		return (
			<View
				style={[{
					backgroundColor: theme.background,
				}, globalStyle.container, style,]}
				{...props}
			/>
		);
	}

};

export default ThemedView;

const styles = StyleSheet.create({})
