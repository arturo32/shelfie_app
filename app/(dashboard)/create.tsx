import {StyleSheet, Text, View} from 'react-native'
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import {globalStyle} from "../../styles";

const Create = () => {
	return (
		<ThemedView>
			<ThemedText title style={globalStyle.title}>
				Add a New Book
			</ThemedText>
			<Spacer/>
		</ThemedView>
	);
};

export default Create;

const styles = StyleSheet.create({})
