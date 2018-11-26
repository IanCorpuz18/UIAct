import React,{ Component }  from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import Icon from "react-native-vector-icons/Ionicons"
import SendFeedback from '../Screens/Content/DrawerContent/SendFeedBack'
import ContentStackNav from './ContentStackNav'
export default SendFeedbackNav = createStackNavigator({
        SkilSendFeedbacklDev:{
                screen:SendFeedback,
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
            
            
            }
                )