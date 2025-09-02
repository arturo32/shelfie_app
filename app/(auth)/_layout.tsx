import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {Stack} from "expo-router";
import {Colors} from "../../styles/colors";
import {useUser} from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const Layout = () => {
	const {user} = useUser();

	return (
		<GuestOnly>
			<StatusBar style="auto" />
			<Stack screenOptions={{
				headerShown: false,
				animation: "none"
			}} />
		</GuestOnly>
  );
};

export default Layout;

const styles = StyleSheet.create({})
