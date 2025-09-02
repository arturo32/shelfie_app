import {StyleSheet, Text, View, ViewProps} from 'react-native'
import {createContext, useEffect, useState} from "react";
import {client, DATABASE_ID, databases, TABLE_ID} from "../lib/appwrite";
import {ID, Models, Permission, Query, Role} from "react-native-appwrite";
import {useUser} from "../hooks/useUser";

type Book = {
	title: string;
	author: string;
	description?: string;
	userId: string;
};

type BooksContextType = {
	books: (Book & Models.Row)[];
	fetchBooks: () => Promise<void>;
	fetchBookById: (id: number) => Promise<void>;
	createBook: (data: Book) => Promise<void>;
	deleteBook: (id: number) => Promise<void>;
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

const BooksProvider = ({children}: ViewProps) => {
	const [books, setBooks] = useState<(Book & Models.Row)[]>([]);
	const {user} = useUser();

	async function fetchBooks() {
		try {
			console.log('hello')
			const response = await databases.listRows<Book & Models.Row>({
				databaseId: DATABASE_ID,
				tableId: TABLE_ID,
				queries: [
					Query.equal('userId', user!.$id)
				]
			});
			setBooks(response.rows);
		} catch (error: any) {
			console.log('hi')
			// throw new Error(error);
		}
	}

	async function fetchBookById(id: number) {
		try {

		} catch (error: any) {
			throw new Error(error);
		}
	}

	async function createBook(data: Book) {
		try {
			const newBook = await databases.createRow({
				databaseId: DATABASE_ID,
				tableId: TABLE_ID,
				rowId: ID.unique(),
				data: {...data, userId: user!.$id},
				permissions: [
					Permission.read(Role.user(user!.$id)),
					Permission.update(Role.user(user!.$id)),
					Permission.delete(Role.user(user!.$id))
				]
			})
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async function deleteBook(id: number) {
		try {

		} catch (error: any) {
			throw new Error(error);
		}
	}

	useEffect(() => {
		let unsubscribe: (() => void) | undefined = undefined;
		const channel = `databases.${DATABASE_ID}.tables.${TABLE_ID}.rows`
		if(user) {
			fetchBooks();
			// unsubscribe = client.subscribe<Book>(channel, (response) => {
			// 	const {payload, events} = response;
			// 	if(events[0].includes('create')) {
			// 		setBooks((prevState) => [...prevState, payload as Book & Models.Row]);
			// 	}
			// })
		} else {
			setBooks([]);
		}
		// return () => {
		// 		if(unsubscribe) {
		// 			unsubscribe();
		// 		}
		// }

	}, [user]);

	return (
		<BooksContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
			{children}
		</BooksContext.Provider>
	);
};

export default BooksProvider;

const styles = StyleSheet.create({})
