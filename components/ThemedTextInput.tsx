import {StyleSheet, Text, TextInput, TextInputProps, useColorScheme, View} from 'react-native'
import {Colors} from "../styles/colors";

const ThemedTextInput = ({style, ...props} : TextInputProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? 'light'];
	return (
		<TextInput
			placeholderTextColor={theme.text}
			style={[{
				backgroundColor: theme.uiBackground,
				color: theme.text,
				padding: 20,
				borderRadius: 6,
				width: '100%',
			}, style]}
			{...props}
		/>
	);
};

export default ThemedTextInput;

const styles = StyleSheet.create({})
