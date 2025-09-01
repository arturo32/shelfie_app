import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {Stack} from "expo-router";
import {Colors} from "../../styles/colors";

const Layout = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme?? 'light'];

	return (
		<>
			<StatusBar style="auto" />
			<Stack screenOptions={{
				headerShown: false,
				animation: "none"
			}} />
		</>
  );
};

export default Layout;

const styles = StyleSheet.create({})
