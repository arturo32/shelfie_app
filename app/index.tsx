import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native'
import Logo from '../assets/splash-icon.png'
import {Link} from "expo-router";
import {globalStyle} from "../styles";
import {Colors} from "../styles/colors";
import ThemedView from "../components/ThemedView";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme?? 'light'];

  return (
      <ThemedView style={[globalStyle.container, {backgroundColor: theme.background}]}>
        <Image source={Logo} style={styles.img}></Image>
        <Text style={globalStyle.title}>Sol's app</Text>
        <Text style={{marginBottom: 30}}>Hiiiiii Sol, is me Arturo, look how cool my app is</Text>
        <Link href="/about" style={globalStyle.link}>About page</Link>
        <Link href="/contact" style={globalStyle.link}>Contact page</Link>
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
    aspectRatio: 1
  }
});

export default Home;
