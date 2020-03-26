//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';
import Authorization from '../screens/Authorization';
import Registration from '../screens/Registration';
//import all the screens we are going to switch 
const screensContainer = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Main: { screen: Main }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Authorization: { screen: Authorization }, 

    Registration: { screen: Registration }
  },
  {
    initialRouteName: 'Authorization',
  }
);
export default createAppContainer(screensContainer);
