import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native'
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import {globalStyle} from "../../styles";
import {useBooks} from "../../hooks/useBooks";
import ThemedCard from "../../components/ThemedCard";
import {Colors} from "../../styles/colors";
import {useEffect} from "react";
import {useRouter} from "expo-router";

const Books = () => {
	const {books, fetchBooks} = useBooks();
	const router = useRouter();

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<ThemedView safe style={[globalStyle.container]}>
			<Spacer/>
			<ThemedText title style={[globalStyle.title, {flex: 0}]}>
				Your Reading List
			</ThemedText>
			<Spacer/>
			<FlatList
				data={books}
        keyExtractor={(item) => item.$id}
				style={{width: '100%', marginTop: 40}}
        contentContainerStyle={styles.list}
				renderItem={({item}) => (
					<Pressable onPress={() => router.push(`/books/${item.$id}`)}>
						<ThemedCard style={styles.card}>
							<ThemedText style={globalStyle.title}>{item.title}</ThemedText>
							<ThemedText>Written by {item.author}</ThemedText>
						</ThemedCard>
					</Pressable>
				)}
			/>
		</ThemedView>
	);
};

export default Books;

const styles = StyleSheet.create({
	list: {

		width: '100%',
	},
	card: {
		marginHorizontal: '5%',
		marginVertical: 10,
		padding: 10,
		paddingLeft: 14,
		borderLeftColor: Colors.primary,
		borderLeftWidth: 5
	}
})
