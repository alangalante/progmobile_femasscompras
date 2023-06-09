import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppItem from '../AppItem';

export default function AppList() {
  const [items, setItems] = useState([]);

    async function getItems() {
      return AsyncStorage.getItem('items')
        .then(response => {
          if (response) 
            return Promise.resolve(JSON.parse(response));
          else 
            return Promise.resolve([]);
        })
    }

    useEffect(() => {
      getItems().then(items => setItems(items));
    },[]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={ styles.title}>Lista de Compras</Text>
      <ScrollView
        style={ styles.scrollContainer}
        contentContainerStyle={ styles.itemsContainer}>
          {items.map(item => {
            return <AppItem key={item.id} id={item.id} item={item.quantidade + ' de ' + item.descricao} />
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  }, 
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  }
});
