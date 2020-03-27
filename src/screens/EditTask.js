import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
  назва: t.String,
  учасники: t.String,
  дедлайн: t.String,
});



export default class EditTask extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SchedulerSCR') }>
      <View style={{width:50,height:45,backgroundColor:'#F7C20F',position:'relative',marginTop:30}}>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:10,marginLeft:10}}></View>
       <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:20,marginLeft:10}}></View>
      <View style={{width:30,height:3,backgroundColor:'black',position:'absolute',marginTop:30,marginLeft:10}}></View>
      </View>
      </TouchableOpacity>
      <Text style={styles.plantext}>РЕДАГУВАННЯ</Text>
      </View>
<Form type={User}  /> 
<View style={{width:190,height:30,backgroundColor:'#A9A9A9',marginTop:15,marginLeft:70,borderRadius:10,marginRight:0}}><Text style={{textAlign:'center',marginTop:3,fontWeight:'bold',}}>Вкласти файл</Text></View>
<TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Створити</Text>
         </TouchableOpacity>
         <Form type={User}  /> 
<View style={{width:190,height:30,backgroundColor:'#A9A9A9',marginTop:15,marginLeft:70,borderRadius:10,marginRight:0}}><Text style={{textAlign:'center',marginTop:3,fontWeight:'bold',}}>Вкласти файл</Text></View>
<TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Редагувати</Text>
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
    fontSize:27,
    textAlign: 'center',
    marginBottom:30,
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
  marginTop:15,
  marginLeft:15,
  marginBottom:25,
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

