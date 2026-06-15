import React, {useState, useEffect} from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/stylesClima';

const STORAGE_KEY = '@ClimaHistorico';

export default function ClimaApp(){

    const [cidade, setCidade] = useState('');
    const [dados, setDados] = useState(null);
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);

    function converterF(c){
        return (c * 9/5) + 32;
    }

    function traduzir(desc){
        const d = desc.toLowerCase();

        if(d.includes('sunny')) return 'Ensolarado ☀️';
        if(d.includes('partly')) return 'Parcialmente nublado ⛅';
        if(d.includes('cloud')) return 'Nublado ☁️';
        if(d.includes('overcast')) return 'Encoberto 🌥️';
        if(d.includes('mist') || d.includes('fog')) return 'Névoa 🌫️';
        if(d.includes('rain')) return 'Chuva 🌧️';

        return desc;
    }

    function corClima(desc){
        const d = desc.toLowerCase();

        if(d.includes('rain')) return '#3498db';
        if(d.includes('sunny')) return '#f1c40f';
        if(d.includes('cloud') || d.includes('overcast')) return '#95a5a6';

        return '#bdc3c7';
    }

    async function buscarClima(nomeCidade){
        if(!nomeCidade.trim()) return;

        setLoading(true);

        try{
            const res = await fetch(`https://wttr.in/${nomeCidade}?format=j1`);
            const json = await res.json();

            const descricaoOriginal = json.current_condition[0].weatherDesc[0].value;

            const info = {
                cidade: nomeCidade,
                temp: parseFloat(json.current_condition[0].temp_C),
                descOrginal: descricaoOriginal,
                desc: traduzir(descricaoOriginal),
                data: new Date().toLocaleString()
            }

            setDados(info);

            const historicoSemDuplicados = historico.filter(
                item => item.cidade.toLowerCase() !== nomeCidade.toLowerCase()
            );

            const novoHistorico = [info, ...historicoSemDuplicados].slice(0,5);

            setHistorico(novoHistorico);

            await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(novoHistorico)
            )
        }catch(error){
            Alert.alert('Erro', 'Erro ao buscar o clima da cidade');
        }finally{
            setLoading(false);
        }
    }

    async function recuperar(){
        const dados = await AsyncStorage.getItem(STORAGE_KEY);
        if(dados) setHistorico(JSON.parse(dados));
    }

    useEffect(() => {
        recuperar();
    },[]);

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>🌤️ Clima</Text>

            <TextInput
                style = {styles.input}
                placeholder = 'Informe a cidade'
                value = {cidade}
                onChangeText = {setCidade}
            />

            <TouchableOpacity
                style = {styles.button}
                onPress = {() => buscarClima(cidade)}
            >
                <Text style = {styles.buttonText}>
                    🔍 Buscar
                </Text>
            </TouchableOpacity>

            {loading && <Text>⏳ Carregando...</Text>}

            {dados && (                    
                <View style = {[
                    styles.resultado,
                    {backgroundColor: corClima(dados.descOrginal)}
                ]}>        
                    <Text style = {styles.text}>
                        📍 {dados.cidade}    
                    </Text>      

                    <Text style = {styles.text}>
                        🌡️ {dados.temp}°C / {converterF(dados.temp).toFixed(1)}°F    
                    </Text>  

                    <Text style = {styles.text}>
                        🧭{dados.desc}
                    </Text>

                    <Text style = {styles.text}>
                        🕒 {dados.data}
                    </Text>

                    <TouchableOpacity
                        style = {styles.updateBtn}
                        onPress = {() => buscarClima(dados.cidade)}
                    >
                        🔄 Atualizar
                    </TouchableOpacity>
                </View>
            )}

            <FlatList
                data = {historico}
                keyExtractor = {(item, index) => index.toString()}
                style = {{marginTop: 20}}
                renderItem = {({item}) => (
                    <Text style = {styles.text}>
                        📍 {item.cidade} - {item.temp}°C
                    </Text>
                )}
            />
        </View>
    );
}