import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#f2f2f2',
    paddingTop:50,
    alignItems:'center'
  },

  titulo:{
    fontSize:26,
    fontWeight:'bold',
    marginBottom:20
  },

  card:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ffffff',
    width:320,
    padding:15,
    margin:8,
    borderRadius:12,
    elevation:4
  },

  image:{
    width:70,
    height:70,
    marginRight:15
  },

  time:{
    fontSize:20,
    fontWeight:'bold'
  },

  texto:{
    fontSize:15
  }

});

export default styles;