import React, {useState} from 'react';
import {
    View,
    TextInput,
    Text,
    Platform,
    KeyboardAvoidingView,
    TouchableOpacity
}from 'react-native';
import styles from '../styles/stylesCEP';

export default function CEPApp(){

    const [cep, setCep] = useState('');
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');
    const [dados, setDados] = useState(null);

    const buscarCep = async () => {
        if(!cep.trim()) return;
        setLoading(true);
        setErro('');
        setDados(null);

        try{            
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
            const json = await res.json();

            if(json.erro){
                setErro('CEP inválido!');
            }else{
                setDados(json);
            }
        }catch{
            setErro('Erro ao buscar CEP');
        }finally{
            setLoading(false);
        }
    }    

    return(
        <KeyboardAvoidingView 
            behavior = {Platform.OS === 'ios' ? 'padding' : undefined}
            style = {styles.container}
        >
            <Text style = {styles.title}>📮 Buscar CEP</Text>

            <TextInput
                placeholder = 'Informe um CEP'
                style = {styles.input}
                value = {cep}
                onChangeText = {setCep}
                keyboardType = 'numeric'
                maxLength = {8}
            />

            <TouchableOpacity
                style = {styles.button}
                onPress = {buscarCep}
                activeOpacity = {0.8}
            >
                <Text style = {styles.buttonText}>
                    {loading ? 'Buscando...' : 'Buscar CEP'}
                </Text>
            </TouchableOpacity>

            {erro && <Text style = {styles.error}>{erro}</Text>}

            {dados && (
                <View style = {styles.resultContainer}>
                    <Text style = {styles.resultTitle}>Resultado:</Text>
                    <Text style = {styles.resultText}>🏡 Logradouro: {dados.logradouro || '-'}</Text>
                    <Text style = {styles.resultText}>🗺 Bairro: {dados.bairro || '-'}</Text>
                    <Text style = {styles.resultText}>🏙 Cidade: {dados.localidade || '-'}</Text>
                    <Text style = {styles.resultText}>🗾 Estado: {dados.uf || '-'}</Text>
                    <Text style = {styles.resultText}>📌 CEP: {dados.cep || '-'}</Text>                
                </View>
            )}
        </KeyboardAvoidingView>
    );
}