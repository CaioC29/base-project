import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const unstable_settings = {
	anchor: '(tabs)',
};
export default function HomeScreen() {


	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	function validarLogin() {
		const emailValido = "admin@gmail.com";
		const senhaValida = "admin123";

		if (email === emailValido && senha === senhaValida) {
			alert("Login bem-sucedido!");
			entrar();
		} else {
			alert("Email ou senha incorretos. Tente novamente.");
		}
	}

	function entrar() {
		router.push({
			pathname: '/(tabs)/home',
			params: {
				user: 'John Doe',
			},
		})
	}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'}>
			<SafeAreaView style={styles.container}>
				<View style={{ flex: 1 }}>

					<View style={styles.areaImagem}>
						<Image
							source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-text-icon.png' }}
							style={styles.imagem} />
					</View>

					<View style={styles.Titulo}>
						<Text style={styles.textoSubtitulo}>Faça login para continuar</Text>
					</View>

					<View style={styles.forms}>
						<TextInput style={styles.entrada} secureTextEntry={false} value={email} onChangeText={setEmail} placeholder="Email" />
						<TextInput style={styles.entrada} secureTextEntry={true} value={senha} onChangeText={setSenha} placeholder="Senha" />
						<TouchableOpacity onPress={validarLogin} style={styles.botaoEntrar}>
							<Text style={styles.textoBotao}>Entrar</Text>
						</TouchableOpacity>
					</View>

					<Text style={styles.textoOu}>Ou entre com:</Text>

					<View style={styles.loginSocial}>

						<TouchableOpacity style={styles.botaoGoogle}>
							<Ionicons name="logo-google" size={24} color="#636be1" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.botaoApple}>
							<Ionicons name="logo-apple" size={24} color="#636be1" />
						</TouchableOpacity>

					</View>
				</View>

			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	areaImagem: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
	},

	imagem: {
		width: 300,
		height: 200,
		resizeMode: 'contain',
	},

	Titulo: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30,
	},

	textoTitulo: {
		fontSize: 32,
		fontWeight: 600,
	},

	textoSubtitulo: {
		fontSize: 20,
		fontWeight: 300,
		marginTop: 20,
		color: '#7d7d7d',
	},

	forms: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},

	entrada: {
		width: '80%',
		padding: 10,
		marginBottom: 20,
		borderWidth: 0,
		backgroundColor: '#eaeaea',
		borderRadius: 8,
		height: 45,
	},

	botaoEntrar: {
		backgroundColor: '#636be1',
		padding: 10,
		borderRadius: 8,
		height: 50,
		borderWidth: 0,
		color: '#fff',
		fontWeight: 600,
		width: '80%',
		fontSize: 18,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	textoOu: {
		textAlign: 'center',
		marginTop: 30,
		color: '#b8b8b8',
		fontSize: 16,
		fontWeight: 200,
	},

	loginSocial: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 20, 
		marginTop: 20,
	},

	botaoGoogle: {
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 8,
		// width: 190,
		paddingHorizontal: "16%", 
		borderWidth: 1,
		borderColor: '#d3d3d3',
		marginRight: 20,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	botaoApple: {
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 8,
		// width: '50%',
		paddingHorizontal: "16%",
		borderWidth: 1,
		borderColor: '#d3d3d3',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	textoBotao: {
		color: '#fff',
		fontWeight: 600,
		fontSize: 18,
	},


});