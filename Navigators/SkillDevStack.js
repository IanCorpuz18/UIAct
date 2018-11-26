import React,{ Component }  from 'react'

import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import SkillDev from '../Screens/Content/DrawerContent/SkillsDevelopment'
import Icon from "react-native-vector-icons/Ionicons"
import SkillsNextPage from "../Screens/Content/DrawerContent/SkillsContent/SKillsNextPage"
export default SkillStackNav = createStackNavigator({
        SkillDev:{
                screen:SkillDev,
                navigationOptions:{
                    headerTintColor:"white",
                    title: "              Yondu Lounge",
                    headerStyle:{
                        backgroundColor:"#FF5A5F",
                    },
                    headerLeft:
                        <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>,
                    headerRight:
                    <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
                }},
                SkillsNextPage:{
                    screen:SkillsNextPage,
                    navigationOptions:{
                        headerTintColor:"white",
                        title: " Skills Development",
                        headerStyle:{
                            backgroundColor:"#FF5A5F",
                        },
                        headerLeft:
                            <Icon name="md-arrow-back" size={30} color="white" style={{marginLeft:10}}/>,
                        headerRight:
                        <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
                    }}


},{
        initialRouteName:"SkillDev"
}
)