import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native';
import firebase from '../config'
import Constants from 'expo-constants';
import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
  імя: t.String,
  прізвище: t.String,
  назва_компанії: t.String,
  email: t.String,
  пароль: t.String,
  підтвердження_паролю: t.String,
});
var s_opt={
  fields:{ 
    логін:{
      keyboardType:'email-address',
      textContentType:'emailAddress',
    },
    пароль:{
      password: true,
      secureTextEntry: true,
      textContentType:'password',
    },
    підтвердження_паролю:{
      password: true,
      secureTextEntry: true,
      textContentType:'password',
    },
    імя:{
      textContentType:'name',
    },
    прізвище:{
      textContentType:'familyName',
    },
    назва_компанії:{
      textContentType:'jobTitle',
    },
}
}
function signup_db(email, name, surname, company){
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  let datetime = date + ' ' + month + ' ' + year + ' ' + hours + ':' + min + ':' + sec;
  firebase.database().ref('users/' + datetime).set({
    name: name,
    surname: surname,
    email:email,
    company: company,
  });    
}

async function signup_auth(email, pass){

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);
  
        console.log("Account created");
        return true;
  
    } catch (error) {
        console.log(error.toString());
       return false;
    }
    
  };
User
  function signup()
  {
    signup_db(email, name, surname, company);
    signup_auth(email, pass);
  }

export default class Registration extends Component {

  handleSignup = () => {
    const SignUpInputData = this._form.getValue();
    console.log('value: ', SignUpInputData);
    signup_db(SignUpInputData.email, SignUpInputData.імя, SignUpInputData.прізвище, SignUpInputData.назва_компанії);
    if(signup_auth(SignUpInputData.email, SignUpInputData.пароль))
    {
      this.props.navigation.navigate("MenuScreen")
    }
  }

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
        <Form ref={c => this._form = c} type={User} options={s_opt} /> 
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton} onPress={this.handleSignup} >Реєстрація</Text>
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
  fontWeight: "100",
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
  justifyContent:'center',
},
textbotton:{
  fontWeight: 'bold',
  fontSize: 24,
  color: '#000000',
  textAlign:'center',
  paddingTop:7,
},



});