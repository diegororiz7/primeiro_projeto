import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../styles/stylesNavegacao';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {Ionicons} from '@expo/vector-icons';
import Barra from './StatusBarApp';

const Pilha = createStackNavigator();

function TelaHome({navigation}){
    return(
        <View style = {styles.viewTN}>
            <Text style = {styles.textoTN}>Tela Home</Text>
            <Text style = {styles.textoTN}>FASM</Text>

            <View style = {styles.botaoContainer}>
                <Button
                    title = 'Tela Curso'
                    onPress={() => navigation.navigate('Curso')}
                />
            </View>

            <View style = {styles.botaoContainer}>
                <Button
                    title = 'Tela Barra'
                    onPress={() => navigation.navigate('Barra')}
                />
            </View>
        </View>
    );
}

function TelaCurso({navigation}){
    return(
        <View style = {styles.viewTN}>
            <Text style = {styles.textoTN}>Tela Curso</Text>
            <Text style = {styles.textoTN}>ADS</Text>

            <View style = {styles.botaoContainer}>
                <Button
                    title = 'Tela Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>

            <View style = {styles.botaoContainer}>
                <Button
                    title = 'Tela Barra'
                    onPress={() => navigation.navigate('Barra')}
                />
            </View>
        </View>
    );
}

function TelaBarra({navigation}){
    return(
        <Barra />
    );
}

export default function NavegacaoApp(){
    return(
        <NavigationContainer>
            <Pilha.Navigator initialRouteName='Home'>
                <Pilha.Screen
                    name = 'Home'
                    component={TelaHome}
                    options = {({navigation}) => ({
                        title: 'Tela Home',
                        headerStyle: {backgroundColor: '#008'},
                        headerTintColor: '#fff',
                        tabBarLabel: 'Home',
                        headerTintStyle: {fontWeight: 'bold'},
                        headerRight: () => (
                            <Ionicons
                                name = 'book'
                                color = '#fff'
                                size = {30}
                                style = {{marginRight: 15}}
                                onPress = {() => navigation.navigate('Curso')}
                            />
                        )
                    })}
                />
                <Pilha.Screen
                    name = 'Curso'
                    component={TelaCurso}
                    options = {({navigation}) => ({
                        title: 'Tela Curso',
                        headerStyle: {backgroundColor: '#0ff'},
                        headerTintColor: '#fff',
                        tabBarLabel: 'Curso',
                        headerTintStyle: {fontWeight: 'bold'},
                        headerRight: () => (
                            <Ionicons
                                name = 'home'
                                color = '#fff'
                                size = {30}
                                style = {{marginRight: 15}}
                                onPress = {() => navigation.navigate('Home')}
                            />
                        )
                    })}
                />
                <Pilha.Screen
                    name = 'Barra'
                    component={TelaBarra}
                    options = {({navigation}) => ({
                        title: 'TelaBarra',
                        headerStyle: {backgroundColor: '#5e9'},
                        headerTintColor: '#fff',
                        tabBarLabel: 'Barra',
                        headerTintStyle: {fontWeight: 'bold'}
                    })}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}