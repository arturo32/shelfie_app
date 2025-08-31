import { StyleSheet, Text, View } from 'react-native'
import {globalStyle} from "../styles";
import {Link} from "expo-router";
import ThemedView from "../components/ThemedView";

const About = () => {
  return (
    <ThemedView style={globalStyle.container}>
      <Text style={globalStyle.title}>About</Text>
      <Link href="/" style={globalStyle.link}>Back home</Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({})
