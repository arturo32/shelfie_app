import {Image, StyleSheet, Text, View} from 'react-native'
import Logo from '../assets//img/books.png';
import {Link} from "expo-router";
import {globalStyle} from "../styles";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import {useUser} from "../hooks/useUser";

const Home = () => {
	const {user} = useUser();
	return (
		<ThemedView>

			<View style={{alignItems: 'center'}}>
				<Image source={Logo} style={styles.img}></Image>

				<ThemedText title style={[globalStyle.title, styles.appTitle]}>SHELFIE</ThemedText>
				<ThemedText>Books and... books</ThemedText>
			</View>
			<Spacer/>


			<View style={{alignItems: 'center'}}>
				{
					!!user ?
					undefined :
					<>
						<Link href="/login" style={globalStyle.link}>
							<ThemedText>Login page</ThemedText>
						</Link>
						<Link href="/register" style={globalStyle.link}>
							<ThemedText>Register page</ThemedText>
						</Link>
					</>
				}

				<Link href="/profile" style={globalStyle.link}>
					<ThemedText>Profile</ThemedText>
				</Link>
			</View>

		</ThemedView>
	);
};

const styles = StyleSheet.create({
	img: {
		marginVertical: 20,
		height: 150,
		aspectRatio: 1,
	},
	appTitle: {
		letterSpacing: 2,
		transform: [
			{translateY: -10}
		]
	}
});

export default Home;
