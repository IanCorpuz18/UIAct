import React,{ Component }  from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import Announcements from '../Screens/Content/DrawerContent/Announcements'
import AnnouncementsContents from '../Screens/Content/DrawerContent/AnnouncementContent/AnnouncementContent'
import Feedback from '../Screens/Content/DrawerContent/AnnouncementContent/FeedBackAnnounce'
import Announce from '../Screens/Content/DrawerContent/Announce/Announce'
export default ContentStackNav = createStackNavigator({
        AnnouncementsHome:{
            screen:Announcements,
            navigationOptions:{
                headerTintColor:"white",
                title: "               Yondu Lounge",
                
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                    textAlign:"center",
                    width:"100%"
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
                title: " Announcements",
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                },
                headerLeft:
                    <Icon name="md-arrow-back" size={30} color="white" style={{marginLeft:10}}/>,
                headerRight:
                <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
            }},
            
            Feedback:{
                screen:Feedback,
                navigationOptions:{
                    headerTintColor:"white",
                    title: " Announcements",
                    headerStyle:{
                        backgroundColor:"#FF5A5F",
                    },
                    headerLeft:
                        <Icon name="md-arrow-back" size={30} color="white" style={{marginLeft:10}}/>,
                    headerRight:
                    <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
                }}
              
},
{
    initialRouteName:"AnnouncementsHome"
}

)