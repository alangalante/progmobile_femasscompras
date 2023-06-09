import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AppForm() {
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function descricaoChanged(descricao) {
    setDescricao(descricao);
  }

  function quantidadeChanged(quantidade) {
    setQuantidade(quantidade);
  }

  async function botaoPressed() {
    const item = {id: new Date().getTime(), descricao, quantidade: parseInt(quantidade)} ;
    let items = [];
    const response = await AsyncStorage.getItem('items');

    if (response) items = JSON.parse(response);

    items.push(item);

    console.log(items);    

    await AsyncStorage.setItem('items', JSON.stringify(items));
    

  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Item para compra</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={ styles.input}
                placeholder="O que deseja comprar?"
                clearButtomMode="always"
                onChangeText={descricaoChanged}
            />
            <TextInput
                style={ styles.input}
                placeholder="Quanto deseja comprar?"
                clearButtomMode="always"
                onChangeText={quantidadeChanged}
            />
            <TouchableOpacity
                style={ styles.button}
                onPress={botaoPressed}
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View>
        <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#FFF'
  }, 
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#e1ded9',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#CCC'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#CCC"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 'bold'
  }
});
