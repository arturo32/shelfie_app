import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native'
import {globalStyle} from "../../styles";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemeButton from "../../components/ThemeButton";

const Register = () => {
	const handleSubmit = (event : GestureResponderEvent) => {

	}

	return (
		<ThemedView style={globalStyle.container}>
			<Spacer/>
			<ThemedText title style={globalStyle.title}>
				Register to your account
			</ThemedText>
			<Spacer/>

			<ThemeButton onPress={handleSubmit}>
				<Text style={{color: '#f2f2f2'}}>Register</Text>
			</ThemeButton>


			<Spacer height={100}/>

			<Link href="/login">
				<ThemedText>Login instead</ThemedText>
			</Link>
		</ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({})
