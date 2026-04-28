import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
	return (
		<View>
			<Text>Tela home</Text>

			<TouchableOpacity onPress={() => router.back()}>
				<Text>Voltar para index principal</Text>
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
