import {StyleSheet, Text, View, ViewProps} from 'react-native'
import {createContext, useState} from "react";
import {DATABASE_ID, databases, TABLE_ID} from "../lib/appwrite";
import {ID, Permission, Role} from "react-native-appwrite";
import {useUser} from "../hooks/useUser";

type Book = {
	title: string;
	author: string;
	description?: string;
	userId: string;
};

type BooksContextType = {
	books: Book[];
	fetchBooks: () => Promise<void>;
	fetchBookById: (id: number) => Promise<void>;
	createBook: (data: Book) => Promise<void>;
	deleteBook: (id: number) => Promise<void>;
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

const BooksProvider = ({children}: ViewProps) => {
	const [books, setBooks] = useState<Book[]>([]);
	const {user} = useUser();

	async function fetchBooks() {
		try {

		} catch (error: any) {
			throw new Error(error);
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

	return (
		<BooksContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
			{children}
		</BooksContext.Provider>
	);
};

export default BooksProvider;

const styles = StyleSheet.create({})
