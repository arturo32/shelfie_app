import {
	GestureResponderEvent,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import {globalStyle} from "../../styles";
import {useState} from "react";
import {useBooks} from "../../hooks/useBooks";
import {useRouter} from "expo-router";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemeButton from "../../components/ThemeButton";
import {useUser} from "../../hooks/useUser";

const Create = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const {createBook} = useBooks();
	const {user} = useUser();
	const router = useRouter();

	const resetForm = () => {
		setTitle('');
		setAuthor('');
		setDescription('');
	}

	const handleSubmit = async (event : GestureResponderEvent) => {
		setError(null);
		setLoading(true);
		Keyboard.dismiss();
		try {
			await createBook({title, author, description, userId: user!.$id});
			resetForm();
		} catch (error: any) {
			setError(error.message);
			return;
		} finally {
			setLoading(false);
		}

		router.replace('/books');
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView>
				<View style={globalStyle.form}>
					<ThemedText title style={globalStyle.title}>
						Add a New Book
					</ThemedText>

					<ThemedTextInput
						placeholder="Title"
						onChangeText={setTitle}
						value={title}
					></ThemedTextInput>

					<ThemedTextInput
						placeholder="Author"
						onChangeText={setAuthor}
						value={author}
					></ThemedTextInput>

					<ThemedTextInput
						placeholder="Description"
						onChangeText={setDescription}
						value={description}
						multiline
						style={{minHeight: 80, textAlignVertical: 'top'}}
					></ThemedTextInput>

					<ThemeButton onPress={handleSubmit}>
						<Text style={{color: '#f2f2f2'}}>{loading ? 'Saving...' : 'Create book'}</Text>
					</ThemeButton>

					{!!error && <Text style={globalStyle.error}>{error}</Text>}
				</View>
			</ThemedView>

		</TouchableWithoutFeedback>
	);
};

export default Create;

const styles = StyleSheet.create({})
