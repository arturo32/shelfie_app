import {StyleSheet} from "react-native";
import {Colors} from "./colors";

export const globalStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
	},
	title: {
		fontWeight: 800,
		fontSize: 18
	},
	link: {
		marginVertical: 10,
		borderBottomWidth: 1
	},
	form: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
		flexShrink: 1
	},
	error: {
		color: Colors.warning,
		padding: 10,
		backgroundColor: Colors.errorColor,
		borderWidth: 1,
		borderRadius: 5,
		marginHorizontal: 10
	}
});
