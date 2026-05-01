import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function TabTwoScreen() {

	function sair() {
		alert("Desconectado com sucesso");
		router.push('/');
	}


	return (

		<View style={styles.container}>
      <SafeAreaView>
    <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.perfil}>
          <Image
            source={{ uri: 'https://thispersondoesnotexist.com/' }} style={styles.imagemPerfil}/>
            <Text style={styles.nome}>Jacinto Pinto</Text>
            <Text style={styles.bio}>Auxiliar de pedreiro</Text>
        </View>


        <View style={styles.statusTexto}>
          <Text style={styles.statusText}>50</Text>
          <Text style={styles.statusText}>15.2k</Text>
          <Text style={styles.statusText}>390</Text>
        </View>
        <View style={styles.statusLabel}>
          <Text style={styles.statusLabelLabel}>Publicações</Text>
          <Text style={styles.statusLabelLabel}>Seguidores</Text>
          <Text style={styles.statusLabelLabel}>Seguindo</Text>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao}><Text style={styles.labelBotao}>Editar Perfil</Text></TouchableOpacity>
          <TouchableOpacity onPress={sair} style={styles.botao}><Text style={styles.labelBotao}>Sair</Text></TouchableOpacity>

        </View>
    </ScrollView>
	  </SafeAreaView>
		</View>
	);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  perfil: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagemPerfil: {
    width: 240,
    height: 240,
    borderRadius: 500,
  },

  nome: {
    fontSize: 32,
    fontWeight: 500,
    marginTop: 32,
  },

  bio: {
    fontSize: 18,
    color: '#727272',
    marginTop: 20,
  },

  statusLabel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  statusTexto: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
  },

  statusText: {
    fontSize: 20,
    fontWeight: 500,
  },

  statusLabelLabel: {
    fontSize: 15,
    color: '#727272',
  },

  areaBotao: {
    alignItems: 'center',
    marginTop: 50,
  },

  botao: {
    backgroundColor: '#3877ff',
    padding: 20,
    borderRadius: 12,
    width: "70%",
    alignItems: 'center',
	marginBottom: 20,
  },

  labelBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },
});
