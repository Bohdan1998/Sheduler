import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';




export default class Task extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-evently'}}>
      <View style={{width:50,height:45,backgroundColor:'#F7C20F',position:'relative',marginTop:30}}>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:10,marginLeft:10}}></View>
       <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:20,marginLeft:10}}></View>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:30,marginLeft:10}}></View>
      </View>
      <Text style={styles.plantext}>ТАСК</Text>
      </View>


<View style={{width:330,height:50,backgroundColor:'#A9A9A9',marginTop:30,marginLeft:0}}>
<Text style={{marginLeft:20,padding:14,fontSize:20,color:'white'}}>TACK</Text></View>
<View style={{width:330,height:360,backgroundColor:'#EDECEB',marginTop:0,marginLeft:0}}>
<View style={{width:310,height:150,backgroundColor:'#A9A9A9',marginTop:15,marginLeft:10,marginRight:0}}></View>
<View style={{width:260,height:30,backgroundColor:'#A9A9A9',marginTop:15,marginLeft:10,borderRadius:10,marginRight:0}}><Text style={{marginLeft:10,marginTop:3,fontWeight:'bold',}}>Дедлайн</Text></View>
<View style={{width:260,height:30,backgroundColor:'#A9A9A9',marginTop:15,marginLeft:10,borderRadius:10,marginRight:0}}><Text style={{marginLeft:10,marginTop:3,fontWeight:'bold',}}>Прикріпити файл</Text></View>
<View style={{width:260,height:60,backgroundColor:'#FEF4D1',marginTop:15,marginLeft:10,marginRight:0}}><Text style={{fontSize:20,textAlign:'center',marginTop:15,fontWeight:'bold',}}>Коментування</Text></View>

</View>
<TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Покинути задачу</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Редагувати</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Видалити</Text>
         </TouchableOpacity>
      </View>
     
      </ScrollView>
     
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
  buttoncontainer:{
  width: 285,
  height: 50,
  borderRadius: 30,
  backgroundColor: '#F7C20F',
  marginTop:45,
  marginLeft:15,
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