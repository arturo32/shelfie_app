import {StyleSheet} from 'react-native'
import {useUser} from "../../hooks/useUser";
import {ReactNode, useEffect} from "react";
import {router} from "expo-router";
import ThemedLoader from "../ThemedLoader";

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
			<ThemedLoader/>
		)
	}

	return children;
};

export default GuestOnly;

const styles = StyleSheet.create({})
