import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Audio } from 'expo-av';

import seloco from './assets/seloco-nao-compensa.mp3'

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState(null); 
  const [resultado, setResultado] = useState('');

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(seloco);
    await sound.playAsync();
  };

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    const idadeNum = parseInt(idade);

    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(idadeNum) || !genero) {
      setResultado('Preencha todos os campos corretamente.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(2);

    let classificacao = '';
    if (imc < 18.5) classificacao = '🍽 Abaixo do peso';
    else if (imc < 24.9) classificacao = '🍌 Peso normal';
    else if (imc < 29.9) classificacao = '🍳 Sobrepeso';
    else if (imc < 34.9) classificacao = '🍔 Obesidade Grau I';
    else if (imc < 39.9) classificacao = '🍕 Obesidade Grau II';
    else classificacao = '🎂 Obesidade Grau III';

    let mensagemExtra = '';
    if (idadeNum < 18) mensagemExtra = '⚠️ Consulte um pediatra para avaliação mais precisa.';
    else if (idadeNum > 60) mensagemExtra = '👴 Atenção especial para a saúde na terceira idade.';
    else mensagemExtra = genero === 'feminino' ? '💪 Força, guerreira!' : '🔥 Tá com tudo!';

    setResultado(`Seu IMC é ${imcFormatado} - ${classificacao}\n${mensagemExtra}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="#a0a0a0"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        placeholderTextColor="#a0a0a0"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        placeholderTextColor="#a0a0a0"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <View style={styles.generoContainer}>
        <Pressable
          style={[
            styles.generoBotao,
            genero === 'masculino' && styles.generoSelecionado,
          ]}
          onPress={() => setGenero('masculino')}
        >
          <Text style={styles.generoTexto}>Masculino</Text>
        </Pressable>
        <Pressable
          style={[
            styles.generoBotao,
            genero === 'feminino' && styles.generoSelecionado,
          ]}
          onPress={() => setGenero('feminino')}
        >
          <Text style={styles.generoTexto}>Feminino</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.botao}  onPress={async () => {
        await playSound();
        calcularIMC();
      }}>
        <Text style={styles.botaoTexto}>Calcular IMC</Text>
      </TouchableOpacity>

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16161a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2cb67d',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    height: 50,
    borderWidth: 1,
    borderColor: '#121629',
    backgroundColor: '#fffffe',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    color: '#000',
  },
  generoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },
  generoBotao: {
    backgroundColor: '#72757e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  generoSelecionado: {
    backgroundColor: '#2cb67d',
  },
  generoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#7f5af0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  botaoTexto: {
    color: '#fffffe',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7f5af0',
    textAlign: 'center',
  },
});
