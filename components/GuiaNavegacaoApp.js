import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../styles/stylesNavegacao';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Barra from './StatusBarApp';

const Guia = createBottomTabNavigator();

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

export default function GuiaNavegacaoApp({navigation}){
    return(
        <NavigationContainer>
            <Guia.Navigator initialRouteName='Home'>
                <Guia.Screen
                    name = 'Home'
                    component={TelaHome}
                    options={{
                        title: 'Tela Home',
                        headerStyle: {backgroundColor: '#008'},
                        headerTintColor: '#fff',
                        tabBarLabel: 'Home',
                        headerTintStyle: {fontWeight: 'bold'},
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'home'
                                color = {color}
                                size = {size}
                            />
                        )
                    }}
                />
                <Guia.Screen
                    name = 'Curso'
                    component = {TelaCurso}
                    options={{
                        title: 'Tela Curso',
                        headerStyle: {backgroundColor: '#0ff'},
                        headerTintColor: '#fff',
                        tabBarLabel: 'Curso',
                        headerTintStyle: {fontWeight: 'bold'},
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'book'
                                color = {color}
                                size = {size}
                            />
                        )
                    }}
                />
                <Guia.Screen
                    name = 'Barra'
                    component={TelaBarra}
                    options={{
                        title: 'Tela Barra',
                        headerStyle: {backgroundColor: '#5e9'},
                        headerTintColor: '#fff',
                        tabBarLabel: 'Barra',
                        headerTintStyle: {fontWeight: 'bold'},
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'menu'
                                color = {color}
                                size = {size}
                            />
                        )
                    }}
                />
            </Guia.Navigator>
        </NavigationContainer>
    );
}