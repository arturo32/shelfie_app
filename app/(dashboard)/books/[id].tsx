import {StyleSheet, Text, View} from 'react-native'
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import {globalStyle} from "../../../styles";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useEffect, useState} from "react";
import {useBooks} from "../../../hooks/useBooks";
import {Book} from "../../../contexts/BooksContext";
import Spacer from "../../../components/Spacer";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLine from "../../../components/ThemedLine";
import ThemeButton from "../../../components/ThemeButton";
import {Colors} from "../../../styles/colors";

const BookDetails = () => {
	const {id} = useLocalSearchParams();
	const [book, setBook] = useState<Book>();
	const {fetchBookById, deleteBook} = useBooks();
	const router = useRouter();

	useEffect(() => {
		setBook(undefined);
		async function loadBook() {
			const bookData = await fetchBookById(id as string);
			setBook(bookData);
		}
		loadBook();

	}, [id]);

	if(!book) {
		return (
			<ThemedView>
				<ThemedLoader/>
			</ThemedView>
		)
	}

	const handleDelete = async () => {
		await deleteBook(book.$id);
		router.replace('/books');
	}

	return (
		<ThemedView safe style={globalStyle.container}>
			<ThemedCard style={{width: '90%', height: '100%', marginTop: 10}}>
				<ThemedText style={[globalStyle.title, {fontSize: 30}]}>{book?.title}</ThemedText>
				<Spacer height={5}/>
				<ThemedText>Written by {book?.author}</ThemedText>
				<ThemedLine/>
				<Spacer/>
				<ThemedText title>Book description:</ThemedText>
				<Spacer height={10}/>

				{
					book.description ?
					<ThemedText>{book?.description}</ThemedText> :
					<ThemedText>[No description available]</ThemedText>
				}

				<ThemeButton style={styles.delete} onPress={handleDelete}>
					<Text style={{color: '#fff', textAlign: 'center'}}>
						Delete book
					</Text>
				</ThemeButton>
			</ThemedCard>
		</ThemedView>
	);
};

export default BookDetails;

const styles = StyleSheet.create({
	delete: {
		marginTop: 40,
		backgroundColor: Colors.warning,
		width: 200,
		alignSelf: 'center'
	}
})
