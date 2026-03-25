import React, {useState} from 'react';
import {ScrollView,Text,View,TextInput,Modal,
  Switch,Alert,StyleSheet,Pressable,
  TouchableHighlight} from 'react-native';
import styles from '../styles/stylesTemperatura';

export default function TemperaturaApp(){

  const [temperatura, setTemperatura] = useState('');
  const [modoFahrenheit, setModoFahrenheit] = useState(false);
  const [modal, setModal] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [historico, setHistorico] = useState([]);

  const celsiusFahrenheit = (temp) => {
    return (temp * 9) / 5 + 32;
  }

  const verificarTemperatura = () => {
    const temperaturaNum = parseFloat(temperatura);

    if(!isNaN(temperaturaNum) && !historico.includes(temperaturaNum)){

      verificarAlerta(temperaturaNum);

      setHistorico([
        temperaturaNum,
        ...historico.slice(0,4)
      ])
    }else{
      alert('Informe um número válido!')
    }
  }

  const verificarAlerta = (temp) => {
    if(temp >= 30){
      setAlerta(true);
      setModal(true);
    }else{
      setAlerta(false);
    }
  }

  const limpar = () => {
    setTemperatura('');
    setHistorico([]);
  }

  const temperaturaNum = parseFloat(temperatura);

  const temperaturaExibida = !isNaN(temperaturaNum)
  ? (modoFahrenheit ? celsiusFahrenheit(temperaturaNum).toFixed(1)
                    : temperaturaNum.toFixed(1))
  : '--';

  const unidadeTemp = modoFahrenheit ? '°F' : '°C';

  const classifcarTemp = () => {
    if(isNaN(temperaturaNum)) return {texto: '--', cor: '#ccc'}

    if(temperaturaNum <= 15) return {texto: '❄️ Frio', cor: '#5dade2'}
    if(temperaturaNum < 30) return {texto: '☀️ Agradável', cor: '#58d68d'}
    return {texto: '🔥 Muito quente', cor: '#ec7063'}
  }

  const status = classifcarTemp();

  return(
    <ScrollView style = {styles.container}>
      <Text style = {styles.titulo}>🌡️ Controle de Temperatura</Text>

      <View style = {[styles.card, {backgroundColor: status.cor}]}>
        <Text style = {styles.pergunta}>Qual a temperatura atual?</Text>

        <TextInput
          value = {temperatura}
          onChangeText={setTemperatura}
          style = {styles.input}
          keyboardType='numeric'
        />

        <Text style = {styles.temp}>{temperaturaExibida}{unidadeTemp}</Text>
        <Text style = {styles.status}>{status.texto}</Text>
      </View>

      <Text style = {styles.texto}>Alternar para Fahrenheit?</Text>

      <Switch
        value = {modoFahrenheit}
        onValueChange={setModoFahrenheit}
        trackColor={modoFahrenheit ? 'green' : 'red'}
        thumbColor={modoFahrenheit ? 'green' : 'red'}
      />

      <View style = {styles.botoes}>
        <Pressable
          style = {styles.botao}
          onPress = {verificarTemperatura}
        >
          <Text style = {styles.textoBotao}>Verificar</Text>
        </Pressable>

        <Pressable
          style = {[styles.botao, {backgroundColor: '#ccc'}]}
          onPress = {limpar}
        >
          <Text style = {styles.textoBotao}>Limpar</Text>
        </Pressable>
      </View>

      <Text style = {styles.subtitulo}>Histórico</Text>

      {historico.map((item, index) => (
        <Text key = {index} style = {styles.itemHistorico}>🌡️ {item} °C</Text>
      ))}

      <Modal
        animationType='slide'
        transparent = {true}
        visible = {alerta && modal}
      >
        <View style = {styles.modalContainer}>
          <View style = {styles.modalCard}>
            <Text style = {styles.modalTitulo}>🔥 Calor intenso!</Text>

            <Text style = {styles.modalTexto}>💧Beba bastante líquido!</Text>
            <Text style = {styles.modalTexto}>🧴Use protetor solar!</Text>
            <Text style = {styles.modalTexto}>🏖️Evite a exposição ao sol!</Text>

            <Pressable
              style = {styles.botaoFechar}
              onPress = {() => setModal(false)}
            >
              Fechar
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

