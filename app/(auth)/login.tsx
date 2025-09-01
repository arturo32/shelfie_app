import {GestureResponderEvent, Pressable, StyleSheet, Text, View} from 'react-native'
import ThemedView from "../../components/ThemedView";
import {globalStyle} from "../../styles";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import {Colors} from "../../styles/colors";
import ThemeButton from "../../components/ThemeButton";

const Login = () => {
	const handleSubmit = (event : GestureResponderEvent) => {

	}

  return (
    <ThemedView style={globalStyle.container}>

	    <Spacer/>
			<ThemedText title style={globalStyle.title}>
				Login to your account
			</ThemedText>
		  <Spacer/>

			<ThemeButton onPress={handleSubmit}>
					<Text style={{color: '#f2f2f2'}}>Login</Text>
			</ThemeButton>

			<Spacer height={100}/>

			<Link href="/register">
				<ThemedText>Register instead</ThemedText>
			</Link>
		</ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({

})
