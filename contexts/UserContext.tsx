import {ViewProps} from 'react-native'
import {createContext, useEffect, useState} from "react";
import {account} from "../lib/appwrite";
import {ID, Models} from "react-native-appwrite";

type User = Models.User<Models.Preferences> | null;

type UserContextType = {
	user: User;
	authChecked: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({children}: ViewProps) {
	const [user, setUser] = useState<User>(null);
	const [authChecked, setAuthChecked] = useState(false);

	async function getInitialUserValue() {
		try {
			const response = await account.get();
			setUser(response);
		} catch (error: any) {
			setUser(null);
		} finally {
			setAuthChecked(true);
		}
	}

	useEffect(() => {
		getInitialUserValue();
	}, []);

	async function login(email: string, password: string) {
		try {
			await account.createEmailPasswordSession({email, password});
			const response = await account.get();
			setUser(response);
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async function register(email: string, password: string) {
		try {
			await account.create({userId: ID.unique(), email, password});
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async function logout() {
		try {
			await account.deleteSession({sessionId: 'current'});
			setUser(null);
		} catch (error: any) {
			throw new Error(error);
		}
	}

	return (
		<UserContext.Provider value={{user, authChecked, login, register, logout}}>
			{children}
		</UserContext.Provider>
	)

}
