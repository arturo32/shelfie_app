import {StyleSheet, Text, View} from 'react-native'
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import {globalStyle} from "../../styles";

const Books = () => {
	return (
		<ThemedView>
			<ThemedText title style={globalStyle.title}>
				Your Reading List
			</ThemedText>
			<Spacer/>
		</ThemedView>
	);
};

export default Books;

const styles = StyleSheet.create({})
