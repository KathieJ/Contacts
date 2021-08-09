import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import Details from './Details'
import Contacts from './ContactsScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator}from 'react-navigation-tabs'

export default class LandingPage extends Component {
  render(){
    return(
      <View style={{flex:1}}> 
      <AppContainer />
      </View>

    )
  }
  }
const 
tabNavigator = createBottomTabNavigator({
    Contacts:{screen:Contacts},
    Details :{screen:Details}

})
const AppContainer= createAppContainer(tabNavigator) 

