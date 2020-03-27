import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';


export default class Tasks extends Component {
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
      <Text style={styles.plantext}>КІМНАТА</Text>
      </View>


<View style={{width:300,height:50,backgroundColor:'#A9A9A9',marginTop:20,marginLeft:5}}>
<Text style={{marginLeft:20,padding:14,fontSize:20,color:'white'}}>TACK</Text>
<View style={{width:300,height:120,backgroundColor:'#EDECEB',marginTop:0,marginLeft:0}}></View>
<View style={{width:300,height:50,backgroundColor:'#A9A9A9',marginTop:40,marginLeft:0}}>
<Text style={{marginLeft:20,padding:14,fontSize:20,color:'white'}}>TACK</Text></View>
<View style={{width:300,height:120,backgroundColor:'#EDECEB',marginTop:0,marginLeft:0}}></View>
<View style={{width:300,height:50,backgroundColor:'#A9A9A9',marginTop:40,marginLeft:0}}>
<Text style={{marginLeft:20,padding:14,fontSize:20,color:'white'}}>TACK</Text></View>
<View style={{width:300,height:120,backgroundColor:'#EDECEB',marginTop:0,marginLeft:0}}></View>

     </View>
     <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
     <View>
     <TouchableOpacity style={styles.buttoncontainer}>
         <Text style={styles.textbotton}>Команда</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttoncontainerr}>
         <Text style={styles.textbotton}>Видалити</Text>
         </TouchableOpacity>
         </View>
       
      <View style={{width:100,height:100,backgroundColor: 'rgba(247, 194, 15, 0.2)',position:'relative',borderRadius:60,marginTop:-30,left:220}}>
      <View style={{width:60,height:60,backgroundColor:'#F7C20F',borderRadius:60,position:'absolute',marginTop:20,marginLeft:20}}>
      <View style={{width:2,height:23,backgroundColor:'white',borderRadius:60,position:'absolute',marginTop:18,marginLeft:28}}></View>
      <View style={{width:23,height:2,backgroundColor:'white',borderRadius:60,position:'absolute',marginTop:28,marginLeft:18}}></View>
      </View>
      </View>
      </View>
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
  width: 175,
  height: 50,
  borderRadius: 30,
  backgroundColor: '#F7C20F',
  marginTop: 635,
  marginLeft:15,
  justifyContent:'center',
},
 buttoncontainerr:{
  width: 175,
  height: 50,
  borderRadius: 30,
  backgroundColor: '#F7C20F',
  marginTop: 35,
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
