import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import firebase from './src/config'
import Authorization from './src/screens/Authorization'

function storeHighScore(userId, score) {
  firebase.database().ref('users/' + userId).set({
    content: score
  });
}

let email='get.from@text.Box';
let pass='get.from@text.Box';

//_______________________________________________________________________
// auth functions
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

async function logout() {

  try {

      await firebase.auth().signOut();
      console.log("Logged out!");

      // Navigate to login view

  } catch (error) {
      console.log(error);
  }

}
//___________________________________________________________________
export default function App() {

  

  //    test buttons (place into return)
  //    <Button title='write' onPress={()=>storeHighScore(3245673,324534)} />
  //    <Button title='create account' onPress={()=>signup(email,pass)} />
  //    <Button title='login' onPress={()=>login(email,pass)} />
  //    <Button title='logout' onPress={()=>logout()} />

  return (
    <View style={styles.container}>
      <Authorization/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
