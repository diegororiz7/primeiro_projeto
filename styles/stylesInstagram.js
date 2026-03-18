import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor:'#f2f2f2',
  paddingTop:40
},

post:{
  backgroundColor:'#fff',
  margin:15,
  padding:15,
  borderRadius:10,
  width:'100%',
  maxWidth:600,
  shadowColor:'#000',
  shadowOpacity:0.1,
  shadowRadius:5,
  elevation:3
},

usuario:{
  fontWeight:'bold',
  fontSize:16,
  marginBottom:10
},

imagem:{
  width:'100%',
  height: 250,
  borderRadius:10,
  marginBottom:10
},

acoes:{
  flexDirection:'row',
  justifyContent:'space-around',
  marginBottom:10
},

botao:{
  padding:8
},

botaoPressionado:{
  backgroundColor:'#eee',
  borderRadius:5
},

textoBotao:{
  fontSize:15
},

likes:{
  fontWeight:'bold'
},

descricao:{
  marginTop:5
}

});

export default styles;
