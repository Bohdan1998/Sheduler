import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity,ScrollView} from 'react-native';
import Constants from 'expo-constants';

export default class Team extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-evently'}}>
      <View style={{width:50,height:45,backgroundColor:'#F7C20F',position:'relative',marginTop:30}}>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:10,marginLeft:10}}></View>
       <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:20,marginLeft:10}}></View>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:30,marginLeft:10}}></View>
      </View>
      <Text style={styles.plantext}>КОМАНДА</Text>
      </View>
      <Text style={styles.kertext}>Керування</Text>
      <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Команда</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Команда</Text>
         </TouchableOpacity>
          <Text style={styles.kertext}>Усі наявні</Text>
      
        <View style={{width:270,height:140,backgroundColor: '#D2D2CF',position:'relative',marginTop:10,left:20}}></View>
        
      <View style={{width:100,height:100,backgroundColor: 'rgba(247, 194, 15, 0.2)',position:'relative',borderRadius:60,marginTop:40,left:220}}>
      <View style={{width:60,height:60,backgroundColor:'#F7C20F',borderRadius:60,position:'absolute',marginTop:20,marginLeft:20}}>
      <View style={{width:2,height:23,backgroundColor:'white',borderRadius:60,position:'absolute',marginTop:18,marginLeft:28}}>
      </View>
      <View style={{width:23,height:2,backgroundColor:'white',borderRadius:60,position:'absolute',marginTop:28,marginLeft:18}}>
      </View>
      </View>
      </View>
    
      </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    
  },
  plantext: {
    fontSize:35,
    textAlign: 'center',
    marginBottom:10,
    marginTop:30,
    marginLeft:30,
    fontStyle: 'normal',
    fontWeight: 'bold',
     color: 'black',
  },
kertext:{
 marginTop:20,
 fontSize:25, 
},
buttoncontainer:{
  width: 275,
  height: 50,
  borderRadius: 10,
  backgroundColor: '#E5E5E5',
  marginTop: 15,
  marginLeft:15,
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