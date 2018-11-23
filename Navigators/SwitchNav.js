import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ContentStackNav from './ContentStackNav'
import Home from "../Screens/Content/Home"


export default Switchnavi = createSwitchNavigator({
  Auth: Home

},{
initialRouteName: 'Auth'
})