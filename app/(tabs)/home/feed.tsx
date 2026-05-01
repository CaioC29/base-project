import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export function Feed({ nomePerfil, fotoPerfil, imagem, legenda, qtdSends, qtdLikes, qtdComments }) {
    return (
        <SafeAreaView style={styles.container}> 
              <View style={styles.nomePerfil}>
                <Image source={{ uri: fotoPerfil }} style={styles.imagemPerfil} />
                <Text style={styles.nomePerfilText}>{nomePerfil}</Text>
                <Ionicons name="ellipsis-horizontal" size={32} color="black" style={styles.dots} />
              </View>
            <View>
              <Image source={{ uri: imagem }} style={styles.imagem} />
            </View>
          <View style={styles.botoesPost}>
            <Ionicons name="heart-outline" size={32} color="black" style={styles.botao} />
            <Text style={styles.label}>{qtdLikes}</Text>
            <Ionicons name="chatbubble-outline" size={32} color="black" style={styles.botao} />
            <Text style={styles.label}>{qtdComments}</Text>
            <Ionicons name="send-outline" size={32} color="black" style={styles.botao} />
            <Text style={styles.label}>{qtdSends}</Text>
            <Ionicons name="bookmark-outline" size={32} color="black" style={styles.dots} />
          </View>
          <View style={styles.legenda}>
            <Text style={{fontWeight: "bold"}}>{nomePerfil}</Text>
            <Text>{legenda}</Text>
          </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  
  nomePerfil: {
    flexDirection: 'row',
    padding: 5,
    margin: 8
  },

  nomePerfilText: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontWeight: 'bold'
  },

  imagemPerfil: {
    width: 35,
    height: 35,
    borderRadius: 50
  },

  imagem: {
    width: `100%`,
    height: 450
  },

  botoesPost: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  botao: {
    padding: 10
  },

  legenda: {
    padding: 10,
  },

  label: {
    marginLeft: -5,
    fontWeight: 'bold',
    fontSize: 16
  },

  dots: {
    marginLeft: 'auto',
  }
}); 