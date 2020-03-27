//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Authorization from '../screens/Authorization';
import Main from '../screens/Main';
import MenuScreen from '../screens/MenuScreen';
import Notifications from '../screens/Notifications';
import Registration from '../screens/Registration';
import Rooms from '../screens/Rooms';
import SchedulerSCR from '../screens/SchedulerSCR';
import Tasks from '../screens/Tasks';
import Team from '../screens/Team';

//import all the screens we are going to switch 
const screensContainer = createStackNavigator({
    Main: { screen: Main }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Authorization: { screen: Authorization }, 

    Registration: { screen: Registration },

    MenuScreen: { screen: MenuScreen },

   // Notifications: { screen: Notifications },

    Rooms: { screen: Rooms },

    SchedulerSCR: { screen: SchedulerSCR },

    Tasks: { screen: Tasks },

    Team: { screen: Team }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Tasks',
  }
);
export default createAppContainer(screensContainer);
