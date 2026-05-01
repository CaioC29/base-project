import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
	return (

		<SafeAreaView style={{ flex: 1 }}>
		<View>
			<Text>Usuario</Text>


			<TouchableOpacity onPress={() => router.push('/')}>
				<Text>Sair</Text>
			</TouchableOpacity>
		</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
