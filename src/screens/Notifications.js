import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';

export default class Notifications extends Component {
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
      <Text style={styles.plantext}>СПОВІЩЕННЯ</Text>
      </View>

<View style={{width:300,height:50,backgroundColor:'#A9A9A9',marginTop:40,marginLeft:0}}>
<Text style={{marginLeft:20,padding:14,fontSize:20,color:'white'}}>TACK</Text></View>
<View style={{width:300,height:120,backgroundColor:'#EDECEB',marginTop:0,marginLeft:0}}></View>
<View style={{width:300,height:50,backgroundColor:'#A9A9A9',marginTop:40,marginLeft:0}}>
<Text style={{marginLeft:20,padding:14,fontSize:20,color:'white'}}>TACK</Text></View>
<View style={{width:300,height:120,backgroundColor:'#EDECEB',marginTop:0,marginLeft:0}}></View>

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

});