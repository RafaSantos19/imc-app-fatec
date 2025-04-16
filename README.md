# 🧮 Calculadora de IMC com React Native + Áudio

Uma calculadora de IMC feita com **React Native** e **Expo**, com suporte para entrada de **peso, altura, idade, gênero** e um toque divertido: um **áudio que toca ao clicar no botão de calcular**!

---

## 🚀 Funcionalidades

- Entrada de peso (kg), altura (m), idade e gênero
- Cálculo automático do IMC com base nos dados informados
- Mensagem personalizada baseada no IMC, idade e gênero
- Toque de áudio personalizado ao pressionar o botão de calcular (`seloco-nao-compensa.mp3`)

---

## 📦 Tecnologias usadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/) para tocar áudio

---

## 📁 Estrutura de pastas

```
📦 projeto-imc
├── assets/
│   └── seloco-nao-compensa.mp3
├── App.js
└── ...
```

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

2. Instale as dependências:
```bash
npm install
```

3. Instale o pacote de áudio:
```bash
npx expo install expo-av
```

4. Rode o projeto:
```bash
npx expo start
```

5. Escaneie o QR Code no seu celular com o app **Expo Go**

---

## 📝 Notas

- Certifique-se de que o áudio `seloco-nao-compensa.mp3` está dentro da pasta `assets/`
- O som é reproduzido com a biblioteca `expo-av`, compatível com Android, iOS e Web via Expo

---

## 💡 Aprendizados

Este projeto é ideal para praticar:

- Manipulação de estados com `useState`
- Componentes como `TextInput`, `TouchableOpacity`, `Pressable` e `View`
- Uso de bibliotecas de terceiros como `expo-av` para som
- Estilização com `StyleSheet` no React Native

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

Feito com 💚 por [Rafael Santos](https://github.com/RafaSantos19)
