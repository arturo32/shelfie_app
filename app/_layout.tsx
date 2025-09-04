import {Appearance, StyleSheet, useColorScheme} from 'react-native'
import {Stack} from "expo-router";
import {Colors} from "../styles/colors";
import {StatusBar} from "expo-status-bar";
import {UserProvider} from "../contexts/UserContext";
import BooksProvider from "../contexts/BooksContext";
import ThemeButton from "../components/ThemeButton";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import setColorScheme = Appearance.setColorScheme;

const RootLayout = () => {
	let colorScheme = useColorScheme();
	const [theme, setTheme] = useState(Colors[colorScheme?? 'light']);

	const changeTheme = () => {
		colorScheme = colorScheme === 'light' ? 'dark' : 'light';
		setColorScheme(colorScheme);
		setTheme(Colors[colorScheme]);
	}

	return (
		<UserProvider>
			<BooksProvider>
					<StatusBar style="auto"/>

					<ThemeButton style={styles.topButton} onPress={changeTheme}>
						<Ionicons
							size={24}
							name={colorScheme === 'light' ? 'moon' : 'sunny'}
							color={theme.iconColorFocused}
						/>
					</ThemeButton>


					<Stack screenOptions={{
						headerStyle: {
							backgroundColor: theme.navBackground,

						},
						headerTintColor: theme.title,
						headerTitleAlign: 'center'
					}}>
						<Stack.Screen name="index" options={{ title: 'Home' }}></Stack.Screen>
						<Stack.Screen name="(auth)" options={{ headerShown: false }}/>
						<Stack.Screen name="(dashboard)" options={{ headerShown: false }}/>
					</Stack>
			</BooksProvider>
		</UserProvider>

	);
};

export default RootLayout;

const styles = StyleSheet.create({
	topButton: {
		position: 'absolute',
		top: 25,
		right: 20,
		zIndex: 2,
		backgroundColor: 'transparent'
	},
	img: {
		width: 20,
		height: 20,
		aspectRatio: 1,
	}
})
