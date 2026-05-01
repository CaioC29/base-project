import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feed } from './feed';

function HomeLayout() {
	return <Stack
		screenOptions={{
			headerShown: false,
		}} />;
}


export default function RootLayout() {
  const colorScheme = useColorScheme();


  return (
    
    <SafeAreaView>
      <ScrollView>

        <Feed nomePerfil="João Silva"
          fotoPerfil="https://thispersondoesnotexist.com/"
          imagem="https://wallpapers.com/images/hd/black-and-white-ocean-1080-x-1350-wallpaper-g8pa0t4oi1ls9zav.jpg"
          legenda="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
          qtdSends={100}
          qtdLikes={'25k'}
          qtdComments={870}
         />

          <Feed nomePerfil="Pedro Álvaro"
          fotoPerfil="https://thispersondoesnotexist.com/"
          imagem="https://wallpapers.com/images/hd/vertical-monitor-c03prmwnzoklgcbv.jpg"
          legenda="The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
          qtdSends={50}
          qtdLikes={'15k'}
          qtdComments={435} />


          <Feed nomePerfil="Jacinto Pinto"
          fotoPerfil="https://thispersondoesnotexist.com/"
          imagem="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyZXM1NWtzdm5ub3NwczE4MG5qajB4YzNseGJzNGhuNXA4bmpmM3JoNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Eqz8ZFUScPHH2/source.gif"
          legenda="Faz o L"
          qtdSends={769}
          qtdLikes={'430k'}
          qtdComments={953} />


          <Feed nomePerfil="Maria Clara"
          fotoPerfil="https://thispersondoesnotexist.com/"
          imagem="https://i.pinimg.com/originals/d9/68/38/d96838caa6877784ff9b59123ba1c4b4.gif"
          legenda="Olha essa neve do caraio"
          qtdSends={389}
          qtdLikes={'738k'}
          qtdComments={833} />


          <Feed nomePerfil="Maria Clara"
          fotoPerfil="https://thispersondoesnotexist.com/"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsYV6h9HI3i-HnJqMk__5UW7zYYj6OKO8Kw&s"
          legenda="you get a shiver in the dark and its raining in the park"
          qtdSends={394}
          qtdLikes={'999k'}
          qtdComments={298} />


          <Feed nomePerfil="Cleiton Farias"
          fotoPerfil="https://thispersondoesnotexist.com/"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs6gsKVOF6K0s7XwXsZJH3hjQBPlP02Ugmg&s"
          legenda="Voce sabe a diferença entre um gato e um po..."
          qtdSends={394}
          qtdLikes={'999k'}
          qtdComments={298} />

      </ScrollView>
    </SafeAreaView>

    
  );
}


const styles = StyleSheet.create({
  container: {
    
  },

  nomePerfil: {
    padding: 20,
    margin: 10
  },

  imagem: {
    width: 1080,
    height: 500
  },

  botoesPost: {
    flexDirection: 'row',

  },

  botao: {
    padding: 10
  },

  legenda: {
    marginTop: 10,
    padding: 10
  }
}); 