import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

	function entrar() {

		router.push({
			pathname: '/(tabs)/home',
			params: {
				user: 'John Doe',
			},
		})
	}
	return (
		<View>
			<Text>Tela de login aqui</Text>

			<TouchableOpacity onPress={entrar}>
				<Text>Entrar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
