import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
	const { user } = useLocalSearchParams();

	return (
		<View>
			<Text>Tela home</Text>

			<TouchableOpacity onPress={() => router.push('/home/detalhes')}>
				<Text>ir para detalhes, {user} asdasd</Text>
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
