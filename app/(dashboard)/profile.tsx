import {StyleSheet, Text, View} from 'react-native'
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import {globalStyle} from "../../styles";
import {useUser} from "../../hooks/useUser";
import ThemeButton from "../../components/ThemeButton";

const Profile = () => {
	const {logout, user} = useUser();

	return (
		<ThemedView>
			<ThemedText title style={globalStyle.title}>
				{user?.email}
			</ThemedText>
			<Spacer/>
			<ThemedText>Time to start reading some books...</ThemedText>
			<Spacer/>

			<ThemeButton onPress={logout}>
				<Text style={{color: '#f2f2f2'}}>Logout</Text>
			</ThemeButton>
		</ThemedView>
	);
};

export default Profile;

const styles = StyleSheet.create({})
