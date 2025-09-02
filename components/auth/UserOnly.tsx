import {StyleSheet, Text} from 'react-native'
import {useUser} from "../../hooks/useUser";
import {ReactElement, useEffect} from "react";
import {router} from "expo-router";
import ThemedView from "../ThemedView";

type UserOnlyProps = {
	children: ReactElement;
}

const UserOnly = ({children}: UserOnlyProps) => {
	const {user, authChecked} = useUser();

	useEffect(() => {
		if(authChecked && user === null) {
			router.replace('/login');
		}
	}, [user, authChecked]);

	if(!authChecked || !user) {
		return (
			<ThemedView>
				<Text>Loading</Text>
			</ThemedView>
		)
	}

	return children;
};

export default UserOnly;

const styles = StyleSheet.create({})
