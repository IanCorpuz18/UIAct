

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import UserLogin from './Screens/Registration/UserLogIn';
import CreateAccount from './Screens/Registration/CreateAccount'
import AccountConfirmed from './Screens/Registration/AccountConfirmed'
import Home from './Screens/Content/Home'
import SwitchNav from './Navigators/SwitchNav'
export default class App extends Component{
  render() {
    return (
        <SwitchNav/>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
