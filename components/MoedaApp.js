import React, {useState, useEffect, useRef} from 'react';
import {
    View, Text, TextInput, Animated, Button,
    ActivityIndicator, TouchableWithoutFeedback, StyleSheet
}from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/stylesMoeda';

export default function MoedaApp(){
    const [valor, setValor] = useState('');
    const [de, setDe] = useState('USD');
    const [para, setPara] = useState('BRL');
    const [cotacao, setCotacao] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const moedas = ['BRL', 'USD', 'EUR', 'CAD', 'ARS', 'JPY', 'BTC'];

    const inverterMoedas = () => {
        const temp = de;
        setDe(para);
        setPara(temp);
        setCotacao(null);
        setResultado(null);
    }

    const converterMoedas = async () => {

        if(isNaN(valor) || !valor){
            alert('Informe um valor válido!');
            return;
        }

        try{
            setCarregando(true);
            const resposta = 
            await fetch(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
            const data = await resposta.json();
            const key = `${de}${para}`;
            const taxa = parseFloat(data[key].bid);
            const valorConvertido = parseFloat(valor) * taxa;
            setResultado(valorConvertido.toFixed(2));
            setCotacao(taxa.toFixed(4));
        }catch(error){
            alert('Não foi possível realizar a conversão, tente novamente!');
            console.error('Erro ao realizar a conversão!', error);
        }finally{
            setCarregando(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Conversor de Moedas 💲</Text>

            <View style = {styles.pickerContainer}>
                <Text style = {styles.label}>De: </Text>

                <Picker
                    style = {styles.picker}
                    selectedValue = {de}
                    onValueChange = {(itemValue) => setDe(itemValue)}
                >
                    {moedas.map((m) => (
                        <Picker.Item key = {m} value = {m} label = {m}/>
                    ))}
                </Picker>
            </View>

            <View style = {styles.pickerContainer}>
                <Text style = {styles.label}>Para: </Text>

                <Picker
                    style = {styles.picker}
                    selectedValue = {para}
                    onValueChange = {(itemValue) => setPara(itemValue)}
                >
                    {moedas.map((m) => (
                        <Picker.Item key = {m} value = {m} label = {m}/>
                    ))}
                </Picker>
            </View>

            <View style = {{marginVertical: 10, width: '80%'}}>
                <Button
                    title = 'Inverter Moedas 💱'
                    color = '#007BFF'
                    onPress={inverterMoedas}
                />
            </View>

            <TextInput
                style = {styles.input}
                value = {valor}
                onChangeText={setValor}
                placeholder='Informe um valor'
                keyboardType='numeric'
            />

            <View style = {{marginVertical: 10, width: '80%'}}>
                <Button
                    title = 'Converter Moedas 💸'
                    color = '#007BFF'
                    onPress={converterMoedas}
                />
            </View>

            {carregando && (
                <ActivityIndicator
                    size = 'large'
                    color = '#007BFF'
                    style = {{marginTop: 20}}
                />
            )}

            {resultado && cotacao && (
                <View style = {styles.resultBox}>
                    <Text style = {styles.resultLine}>
                        💵 Valor digitado: {valor}{de}
                    </Text>

                    <Text style = {styles.resultLine}>
                        💹 1{de} = {cotacao}{para}
                    </Text>

                    <Text style = {styles.resultLine}>
                        💶 Valor convertido: {resultado}{para}
                    </Text>
                </View>
            )}
        </View>
    );
}