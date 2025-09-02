import {
	GestureResponderEvent,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import {globalStyle} from "../../styles";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemeButton from "../../components/ThemeButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import {useState} from "react";
import {useUser} from "../../hooks/useUser";

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const {user, register} = useUser();

	const handleSubmit = async (event : GestureResponderEvent) => {
		setError(null);
		Keyboard.dismiss();
		try {
			await register(email, password);
		} catch (error: any) {
			setError(error.message);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView style={globalStyle.container}>

				<View style={globalStyle.form}>
					<ThemedText title style={globalStyle.title}>
						Register to your account
					</ThemedText>
					<Spacer/>

					<ThemedTextInput
						placeholder="Email"
						keyboardType="email-address"
						onChangeText={setEmail}
						value={email}
					></ThemedTextInput>

					<ThemedTextInput
						placeholder="Password"
						onChangeText={setPassword}
						value={password}
						secureTextEntry
					></ThemedTextInput>

					<ThemeButton onPress={handleSubmit}>
						<Text style={{color: '#f2f2f2'}}>Register</Text>
					</ThemeButton>

					{!!error && <Text style={globalStyle.error}>{error}</Text>}
				</View>



				<Spacer height={100}/>

				<Link href="/login">
					<ThemedText>Login instead</ThemedText>
				</Link>
			</ThemedView>
		</TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({})
