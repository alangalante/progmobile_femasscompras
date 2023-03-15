import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AppForm() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Item para compra</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={ styles.input}
                placeholder="O que deseja comprar?"
                clearButtomMode="always"
            />
            <TextInput
                style={ styles.input}
                placeholder="Quanto deseja comprar?"
                clearButtomMode="always"
            />
            <TouchableOpacity
                style={ styles.button}
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
