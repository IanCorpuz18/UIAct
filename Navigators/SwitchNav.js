import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ContentStackNav from './ContentStackNav'
import Home from "../Screens/Content/Home"
import SkillStackNav from './SkillDevStack';
import HomeStackNav from './HomeStackNav'
export default Switchnavi = createSwitchNavigator({
  Auth: HomeStackNav

},{
initialRouteName: 'Auth'
})