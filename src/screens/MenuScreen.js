import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity,ScrollView} from 'react-native';
import Constants from 'expo-constants';




export default class MenuScreen extends Component {
  render() {
    return (
      
      <View style={styles.container}>
      <View style={{width:50,height:45,backgroundColor:'#F7C20F',position:'relative',marginTop:45}}>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:10,marginLeft:10}}></View>
       <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:20,marginLeft:10}}></View>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:30,marginLeft:10}}></View>
      </View>
      
      <Text style={styles.plantext}>ПЛАНУВАЛЬНИК</Text>
      <Text style={styles.autotext}>Pain son rose more park way that. To things so denied admire. Small for ask shade water manor think men begin. </Text>
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Інструкція</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Інформація</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Підтримка</Text>
         </TouchableOpacity>
        <Text style={styles.textbot}></Text>
      </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor:'black',
    padding: 20,
    
  },
  plantext: {
    fontSize:35,
    textAlign: 'center',
    marginBottom:10,
    marginTop:50,
    fontStyle: 'normal',
    fontWeight: 'bold',
     color: 'white',
  },
autotext:{
  fontWeight: 100,
  fontSize: 18,
  marginBottom:30,
  color: '#B9AEAE',
  textAlign: 'center',
},
buttoncontainer:{
  width: 175,
  height: 50,
  borderRadius: 30,
  backgroundColor: '#F7C20F',
  marginTop: 35,
  marginLeft:75,
  justifyContent:'CENTER',
},
textbotton:{
  fontWeight: 'bold',
  fontSize: 24,
  color: '#000000',
  textAlign:'center',
  paddingTop:7,
},
textbot:{
  marginTop:160,
}

});