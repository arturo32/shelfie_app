import {
	Animated, Easing,
	FlatList,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native'
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import {globalStyle} from "../../styles";
import {useBooks} from "../../hooks/useBooks";
import ThemedCard from "../../components/ThemedCard";
import {Colors} from "../../styles/colors";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "expo-router";
import {Book} from "../../contexts/BooksContext";

const Books = () => {
	const {books, fetchBooks} = useBooks();
	const router = useRouter();
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const [pressedItem, setPressedItem] = useState<string>();

	useEffect(() => {
		fetchBooks();
	}, []);

	const expandBook = (event: GestureResponderEvent, item: Book)=> {
		fadeAnim.setValue(0);
		setPressedItem(item.$id);
		Animated.timing(fadeAnim, {
			toValue: -800,
			duration: 500,
			useNativeDriver: true,
			easing: Easing.linear
		}).start();
		// event.target.measure();
		// router.push(`/books/${item.$id}`)
	}

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
					<Pressable onPress={(event) => expandBook(event, item)}>

						<Animated.View style={item.$id === pressedItem ? {
							transform: [
								{translateY: fadeAnim},
								{perspective: 1000}
							],
							position: 'absolute',
							 zIndex: 10000
						}: undefined}>
							<ThemedCard style={[styles.card, item.$id === pressedItem ? styles.pressed : undefined]}>

									<ThemedText style={globalStyle.title}>{item.title}</ThemedText>
									<ThemedText>Written by {item.author}</ThemedText>

							</ThemedCard>
						</Animated.View>

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
	},
	pressed: {
		backgroundColor: 'red'
	}
})
