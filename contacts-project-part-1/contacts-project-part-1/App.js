import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WelcomeScreen from './screens/WelcomeScreen';
import Details from './screens/Details'
import Contacts from './screens/ContactsScreen'
import LandingPage from './screens/LandingPage'

export default class App extends Component {

  render(){
    return(
     <AppContainer>

    )
  }
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  LandingPage: {screen:LandingPage},

})
const AppContainer= createAppContainer(
  switchNavigator
)