import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGit = '#010408';

const urlGithub = 'https://github.com/MikaelMelo1/';

const App = () => {
  const handlePressGoT = async () => {
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlGithub);

    if (res) {
      console.log('Abrindo Link');
      await Linking.openURL(urlGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGit} barStyle="light-content" />
      <View style={style.content}>
        <Image
          style={style.avatar}
          source={require('../assets/85139137.jpg')}
        />
        <Text style={[style.text, style.name]}> Mikael Melo</Text>
        <Text style={[style.text, style.nikname]}>mikael_melo</Text>
        <Text style={[style.text, style.formacao]}>
          Ánalise e Desenvolvimento de Sistemas
        </Text>

        <Pressable onPress={handlePressGoT}>
          <View>
            <Text style={style.button}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //colunas
    backgroundColor: colorGit,
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  content: {alignItems: 'center', marginTop: 20},
  padding: 30, //contexto em geral
  avatar: {
    //imagem
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  text: {
    color: 'white',
    textAlign: 'center',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  nikname: {
    fontSize: 18,
  },

  formacao: {
    fontSize: 16,
  },
  button: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
