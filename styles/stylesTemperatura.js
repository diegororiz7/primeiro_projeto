import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container:{
  flexGrow:1,
  padding:20,
  backgroundColor:'#f2f2f2',
  justifyContent:'center'
},

titulo:{
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom:20
},

card:{
  padding:20,
  borderRadius:12,
  marginBottom:20
},

pergunta:{
  fontSize:18,
  marginBottom:10
},

input:{
  backgroundColor:'#fff',
  padding:10,
  borderRadius:8,
  fontSize:18,
  marginBottom:10
},

temp:{
  fontSize:28,
  fontWeight:'bold'
},

status:{
  fontSize:18,
  marginTop:5
},

texto:{
  fontSize:18,
  marginBottom:10
},

botoes:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:20
},

botao:{
  backgroundColor:'#3498db',
  padding:12,
  borderRadius:8
},

textoBotao:{
  color:'#fff',
  fontSize:16
},

subtitulo:{
  fontSize:22,
  fontWeight:'bold',
  marginBottom:10
},

itemHistorico:{
  fontSize:18,
  marginBottom:5
},

modalContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgba(0,0,0,0.7)'
},

modalCard:{
  backgroundColor:'#fff',
  padding:25,
  borderRadius:12,
  width:'80%',
  alignItems:'center'
},

modalTitulo:{
  fontSize:22,
  fontWeight:'bold',
  marginBottom:10
},

modalTexto:{
  fontSize:18,
  marginBottom:5
},

botaoFechar:{
  marginTop:15,
  backgroundColor:'#e74c3c',
  padding:10,
  borderRadius:8
}

});

export default styles;