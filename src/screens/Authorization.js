import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, TouchableOpacity, Alert} from 'react-native';
import firebase from '../config'
import t from 'tcomb-form-native';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { emitNotification } from 'expo/build/Notifications/Notifications';


const Form = t.form.Form;

const User = t.struct({
  логін: t.String,
  пароль: t.String,
});
var f_opt = {
  fields:{
    логін:{
      keyboardType:'email-address',
      textContentType:'emailAddress',
    },
    пароль:{
      password: true,
      secureTextEntry: true,
    }
  }
}

async function login(email, pass) 
  {
    console.log("email "+email);
      try {
          await firebase.auth()
              .signInWithEmailAndPassword(email, pass);
    
          console.log("Logged In!");
          return true;
    
      } catch (error) {
          console.log(error.toString())
          
          Alert.alert("Помилка", "Хибний логін або пароль!");
          
          return false;
      }
  }

export default class Authorization extends Component {
  
  
  handleLogin = () => {
    const LoginInputData = this._form.getValue();
    console.log('value: ', LoginInputData);
    if(login(LoginInputData.логін, LoginInputData.пароль))
    {
      this.props.navigation.navigate("MenuScreen")
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.plantext}>ПЛАНУВАЛЬНИК</Text>
      <Text style={styles.autotext}>Авторизація</Text>
        <Form  
        ref={c => this._form = c}
        type={User} options={f_opt} /> 
         <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={styles.textbotton} onPress={this.handleLogin}>Увійти</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={styles.regtext} onPress={() => this.props.navigation.navigate("Registration")}>Зареєструватись як адмін</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
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
  autotext: {
    fontWeight: "100",
    fontSize: 24,
    marginBottom: 30,
    color: '#B9AEAE',
    textAlign: "center",
  },
  buttoncontainer: {
    width: 150,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#F7C20F',
    marginTop: 25,
    marginLeft: 90,
    justifyContent: "center",
  },
  textbotton: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
    textAlign:'center',
    paddingTop:7,
  },
  regtext: {
    textAlign:'center',
    paddingTop:50,
    color:'#B9AEAE',
  }
});
