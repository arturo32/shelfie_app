import {
	Pressable,
	PressableProps,
	StyleProp,
	StyleSheet,
	useColorScheme,
	ViewStyle
} from 'react-native'
import {Colors} from "../styles/colors";

const ThemeButton = ({style, ...props} : PressableProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme?? 'light'];

	return (
		<Pressable
			style={({pressed}) => [styles.btn, pressed && styles.pressed, style as StyleProp<ViewStyle>]}
			{...props}
		/>
	);
};

export default ThemeButton;

const styles = StyleSheet.create({
	btn: {
		backgroundColor: Colors.primary,
		padding: 15,
		borderRadius: 5,
	},
	pressed: {
			opacity: 0.8
	}
})
