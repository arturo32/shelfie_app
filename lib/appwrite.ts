import {Client, Account, Avatars} from 'react-native-appwrite';

export const client = new Client()
	.setProject('test')
	.setPlatform('test');


export const account = new Account(client);

export const avatars = new Avatars(client);
