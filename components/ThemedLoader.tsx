import {ActivityIndicator, StyleSheet, Text, useColorScheme, View} from 'react-native'
import {Colors} from "../styles/colors";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? 'light'];

	return (
		<ThemedView>
			<ActivityIndicator size="large" color={theme.text}></ActivityIndicator>
		</ThemedView>
	);
};

export default ThemedLoader;
