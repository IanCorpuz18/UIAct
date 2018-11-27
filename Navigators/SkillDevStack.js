import React,{ Component }  from 'react'

import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import SkillDev from '../Screens/Content/DrawerContent/SkillsDevelopment'
import Icon from "react-native-vector-icons/Ionicons"
import SkillsNextPage from "../Screens/Content/DrawerContent/SkillsContent/SKillsNextPage"
export default SkillStackNav = createStackNavigator({
        SkillDev:{
                screen:SkillDev,
                navigationOptions:({navigation}) =>  {
                    return{ 
                    headerTintColor:"white",
                    title: "Yondu Lounge",
                    headerStyle:{
                        backgroundColor:"#FF5A5F",
                        textAlign:"center"
                    },
                    headerLeft:
                        <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
                        size={30} color="white" style={{marginLeft:10}}/>,
                    headerRight:
                    <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
                }}},
                SkillsNextPage:{
                    screen:SkillsNextPage,
                    navigationOptions:({navigation}) =>  {
                        return{ 
                        headerTintColor:"white",
                        title: " Skills Development",
                        headerStyle:{
                            backgroundColor:"#FF5A5F",
                        },
                        headerLeft:
                            <Icon onPress={() => navigation.goBack()}
                            name="md-arrow-back" size={30} color="white" style={{marginLeft:10}}/>,
                        headerRight:
                        <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
                    }}}


},{
        initialRouteName:"SkillDev"
}
)