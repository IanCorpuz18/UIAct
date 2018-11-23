import React,{ Component }  from 'react'

import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import SkillDev from '../Screens/Content/DrawerContent/SkillsDevelopment'
import SkillDevContent from '../Screens/Content/DrawerContent/SkillsContent/SkillDevContent'
export default ContentStackNav = createStackNavigator({
        SkillDev:SkillDev,
        SkillDevContent:SkillDevContent


})