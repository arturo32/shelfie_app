import {StyleSheet} from 'react-native'
import {useUser} from "../../hooks/useUser";
import {ReactElement, useEffect} from "react";
import {router} from "expo-router";
import ThemedLoader from "../ThemedLoader";

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
			<ThemedLoader/>
		)
	}

	return children;
};

export default UserOnly;

const styles = StyleSheet.create({})
