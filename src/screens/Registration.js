import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
  імя: t.String,
  прізвище: t.String,
  назва_компанії: t.String,
  логін: t.String,
  пароль: t.String,
  підтвердження_паролю: t.String,
});

async function signup(email, pass){

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);
  
        console.log("Account created");
  
        // Navigate to the Home page, the user is auto logged in
  
    } catch (error) {
        console.log(error.toString());
    }
    
  };

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Image
          style={{width: 100, height: 100,marginBottom:20,marginLeft:120}}
          source={{uri: 'https://pngicon.ru/file/uploads/1_2832-128x128.png'}}
        />
      <Text style={styles.plantext}>ПЛАНУВАЛЬНИК</Text>
      <Text style={styles.autotext}>Реєстрація</Text>
        <Form type={User}  /> 
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Реєстрація</Text>
         </TouchableOpacity>
      </View>
       </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    paddingLeft: 10,
    paddingRight:10,
    backgroundColor: '#ffffff',
  },
  plantext: {
    fontSize:30,
    textAlign: 'center',
    marginBottom:20,
    marginTop:0,
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
  width: 170,
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



});