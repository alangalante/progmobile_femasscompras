import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';

import AppForm from '../AppForm';
import AppList from '../AppList';

const {Navigator, Screen} = createBottomTabNavigator();


export default function AppTab() {
  return (
    <NavigationContainer>
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: "#32264D",
                tabBarInactiveTintColor: "#C1BCCC",
                tabBarActiveBackgroundColor: "#EBEBF5",
                tabBarInactiveBackgroundColor: "#FAFAFC",
                tabBarLabelStyle: {
                    fontSize: 13,
                    position: 'absolute',
                    top: 15,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                tabBarIconStyle: { display: "none"}
            }}
        >
            <Screen 
                name="Listagem" 
                component={AppList} 
                options={{
                    tabBarLabel: "Listagem"
                }}
            />
            <Screen 
                name="Cadastro" 
                component={AppForm} 
                options={{
                    tabBarLabel: "Cadastro"
                }}

            />
        </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
