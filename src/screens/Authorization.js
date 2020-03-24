import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity} from 'react-native';

import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
  логін: t.String,
  пароль: t.String,
});

async function login(email, pass) {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);
  
        console.log("Logged In!");
  
        // Navigate to the Home page
  
    } catch (error) {
        console.log(error.toString())
    }
  
  }

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.plantext}>ПЛАНУВАЛЬНИК</Text>
      <Text style={styles.autotext}>Авторизація</Text>
        <Form type={User}  /> 
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Увійти</Text>
         </TouchableOpacity>
         <Text style={styles.regtext}>зареєструватись як адмін</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  plantext: {
    fontSize:30,
    textAlign: 'center',
    marginBottom:20,
    marginTop:80,
    fontStyle: 'normal',
    fontWeight: 'bold',
     color: 'black',
  },
autotext:{
  fontWeight: 100,
  fontSize: 24,
  marginBottom:30,
  color: '#B9AEAE',
  textAlign: 'center',
},
buttoncontainer:{
  width: 150,
  height: 50,
  borderRadius: 30,
  backgroundColor: '#F7C20F',
  marginTop: 25,
  marginLeft:90,
  justifyContent:'CENTER',
},
textbotton:{
  fontWeight: 'bold',
  fontSize: 24,
  color: '#000000',
  textAlign:'center',
  paddingTop:7,
},
regtext:{
  textAlign:'center',
  paddingTop:50,
  color:'#B9AEAE',
}


});