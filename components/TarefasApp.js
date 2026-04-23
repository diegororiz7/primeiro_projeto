import React, { useState } from 'react';  
import {  
  View,  
  Text,  
  TextInput,  
  TouchableOpacity,  
  FlatList,  
  StyleSheet  
} from 'react-native';  
import { Picker } from '@react-native-picker/picker';  
//npx expo install @react-native-picker/picker  
  
  
export default function TarefasApp() {  
  const [nome, setNome] = useState('');  
  const [prioridade, setPrioridade] = useState('Média');  
  const [tarefas, setTarefas] = useState([]);  
  const [editandoId, setEditandoId] = useState(null);  
  
  
  function adicionarOuSalvar() {
    if (editandoId) {

    } else {

    }
  }
  
  function remover(id) {  
  
  }  
  
  function concluir(id) {  
  
  }  
  
  function editar(item) {  
  
  }  
  
  function corCard(prioridade) {  
  
  }  
  
  const concluidas = tarefas.filter(t => t.concluida).length;  
  const pendentes = tarefas.length - concluidas;  
  
  return (  
    <View style={styles.container}>  
      <Text style={styles.titulo}>Gerenciador de Tarefas</Text>  
  
  
      <TextInput  
      />  
  

      <Picker  
        //selectedValue={}  
        //onValueChange={}  
        style={styles.input}  
      >  
        <Picker.Item label= "  " value= "   " />  
        <Picker.Item label= "  " value= "   "  />  
        <Picker.Item label= "  " value= "   "  />  
      </Picker>  
  
  
      <TouchableOpacity  
      >  
        <Text style={styles.botaoTexto}>  
        </Text>  
      </TouchableOpacity>  
  
  
      <View style={styles.resumo}>  
        <Text>Total: {}</Text>  
        <Text>Concluídas: {}</Text>  
        <Text>Pendentes: {}</Text>  
      </View>  
  
  
      <FlatList  
        //data={}  
        //keyExtractor={}  
        renderItem={({ item }) => (  
          <View  
          >  
            <TouchableOpacity  
            >  
              <Text  
              >  
              </Text>  
            </TouchableOpacity>  
  
  
            <TouchableOpacity>  
              <Text style={styles.editar}>✏</Text>  
            </TouchableOpacity>  
  
  
            <TouchableOpacity>  
              <Text style={styles.remover}>X</Text>  
            </TouchableOpacity>  
          </View>  
        )}  
      />  
    </View>  
  );  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex:  1,  
    padding: 20,  
    marginTop: 40  
  },  
  titulo: {  
    fontSize: 24,  
    textAlign: 'center',  
    marginBottom:  15  
  },  
  input: {  
    borderWidth:  1,  
    borderRadius: 8,  
    padding:  10,  
    marginBottom:  10  
  },  
  botao: {  
    backgroundColor: '#2196F3',  
    padding:  12,  
    borderRadius: 8,  
    alignItems: 'center'  
  },  
  botaoTexto: {  
    color: '#fff',  
    fontWeight: 'bold'  
  },  
  resumo: {  
    marginVertical:  15  
  },  
  card: {  
    padding:  12,  
    borderRadius: 8,  
    marginBottom:  10,  
    flexDirection: 'row',  
    alignItems: 'center',  
    gap:  10  
  },  
  texto: {  
    fontSize:  16  
  },  
  riscado: {  
    textDecorationLine: 'line-through'  
  },  
  editar: {  
    color: 'blue',  
    fontSize:  18  
  },  
  remover: {  
    color: 'red',  
    fontSize:  18,  
    fontWeight: 'bold'  
  }  
});  
