import {StyleSheet, Text} from 'react-native'
import {useUser} from "../../hooks/useUser";
import {ReactNode, useEffect} from "react";
import {router} from "expo-router";
import ThemedView from "../ThemedView";

type GuestOnlyProps = {
	children: ReactNode;
}

const GuestOnly = ({children}: GuestOnlyProps) => {
	const {user, authChecked} = useUser();

	useEffect(() => {
		if(authChecked && user !== null) {
			router.replace('/profile');
		}
	}, [user, authChecked]);

	if(!authChecked || user) {
		return (
			<ThemedView>
				<Text>Loading</Text>
			</ThemedView>
		)
	}

	return children;
};

export default GuestOnly;

const styles = StyleSheet.create({})
