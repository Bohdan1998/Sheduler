import React, { Component } from 'react';
import { View, StyleSheet,Text,Button,Image,TouchableOpacity,ScrollView} from 'react-native';
import Constants from 'expo-constants';

export default class SchedulerSCR extends Component {
  render() {
    return (     
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Rooms') }>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={{width:50,height:45,backgroundColor:'#F7C20F',marginTop:45,borderRadius:70}}></View>
         <Text style={styles.plantext}>Кімнати</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Team') }>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={{width:50,height:45,backgroundColor:'#F7C20F',marginTop:45,borderRadius:30}}></View>
         <Text style={styles.plantext}>Команда</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => console.log("About us")}>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={{width:50,height:45,backgroundColor:'#F7C20F',marginTop:45,borderRadius:30}}></View>
         <Text style={styles.plantext}>Про нас</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Share") }>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={{width:50,height:45,backgroundColor:'#F7C20F',marginTop:45,borderRadius:30}}></View>
         <Text style={styles.plantext}>Поділитись</Text>
      </View>
      </TouchableOpacity>
    </View> 
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor:'black',
    padding:20,
    paddingTop:220,
    
  },
  plantext: {
    fontSize:35,
    marginBottom:10,
    marginTop:50,
    marginLeft:40,
    fontStyle: 'normal',
    fontWeight: 'bold',
     color: 'white',
  },

});

