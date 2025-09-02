import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import {Slot, Stack} from "expo-router";
import {Colors} from "../styles/colors";
import {StatusBar} from "expo-status-bar";
import {UserProvider} from "../contexts/UserContext";
import BooksProvider from "../contexts/BooksContext";

const RootLayout = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme?? 'light'];

	return (
		<UserProvider>
			<BooksProvider>
				<StatusBar style="auto"/>
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

const styles = StyleSheet.create({})
