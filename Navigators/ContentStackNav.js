import React,{ Component }  from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import Announcements from '../Screens/Content/DrawerContent/Announcements'
import AnnouncementsContents from '../Screens/Content/DrawerContent/AnnouncementContent/AnnouncementContent'
export default ContentStackNav = createStackNavigator({
        AnnouncementsHome:{
            screen:Announcements,
            navigationOptions:{
                headerTintColor:"white",
                title: "     Yondu Lounge",
                headerStyle:{
                    backgroundColor:"#00BD57",
                },
                headerLeft:
                    <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>,
                headerRight:
                <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
            }
        },
        AnnouncementsContents:{
            screen:AnnouncementsContents,
            navigationOptions:{
                headerTintColor:"white",
                title: "     Restaurants Nearby",
              
                headerStyle:{
                    backgroundColor:"#00BD57",
                  
                },
                headerLeft:
                
                    <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>
                    
                   ,
                headerRight:
                
                <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
              
            }}
})