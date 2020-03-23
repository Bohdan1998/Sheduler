import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from './src/config'

function storeHighScore(userId, score) {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  });
}

export default function App() {

  

  //  test button (place into return)
  //  <Button title='write' onPress={()=>storeHighScore(3245673,324534)} />

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
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
