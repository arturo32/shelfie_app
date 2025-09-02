import {Client, Account, Avatars, Databases, TablesDB} from 'react-native-appwrite';

export const DATABASE_ID = 'test';
export const TABLE_ID = 'books';


export const client = new Client()
	.setProject('test')
	.setPlatform('test');


export const account = new Account(client);

export const avatars = new Avatars(client);

export const databases = new TablesDB(client);
