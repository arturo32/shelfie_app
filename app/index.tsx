import {Image, StyleSheet, Text} from 'react-native'
import Logo from '../assets/splash-icon.png'
import {Link} from "expo-router";
import {globalStyle} from "../styles";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
	return (
		<ThemedView>
			<Image source={Logo} style={styles.img}></Image>
			<Spacer height={20} />
			<ThemedText title style={globalStyle.title}>Sol's app</ThemedText>
			<Spacer height={10}/>
			<ThemedText>Hiiiiii Sol, is me Arturo, look how cool my app is</ThemedText>
			<Spacer/>
			<Link href="/login" style={globalStyle.link}>
				<ThemedText>Login page</ThemedText>
			</Link>
			<Link href="/register" style={globalStyle.link}>
				<ThemedText>Register page</ThemedText>
			</Link>
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#eee',
		padding: 20,
		borderRadius: 5,
		boxShadow: '4px 4px rgba(0, 0, 0, 0.1)'
	},
	img: {
		marginVertical: 20,
		height: 150,
		aspectRatio: 1,
		borderRadius: 100
	}
});

export default Home;
