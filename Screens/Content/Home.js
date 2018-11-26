import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView,Image} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Attendance from '../../Screens/Content/DrawerContent/Attendance'
import CompanyPolicies from '../../Screens/Content/DrawerContent/CompanyPolicies'
import CompensationBenefits from '../../Screens/Content/DrawerContent/CompensationBenefits'
import Logout from '../../Screens/Content/DrawerContent/Logout'
import Notifications from '../../Screens/Content/DrawerContent/Notifications'
import SendFeedBack from '../../Screens/Content/DrawerContent/SendFeedBack'
import SkillsDevelopment from '../../Screens/Content/DrawerContent/SkillsDevelopment'
import WorkingCondition from '../../Screens/Content/DrawerContent/WorkingConditions'
import ContentStackNav from '../../Navigators/ContentStackNav'
import SkillDevStack from '../../Navigators/SkillDevStack'
  class Home extends Component{
     render(){
    return(
   
        <AppDrawerNav style={{ backgroundColor: "red" }} />
    )
    }
    }
    const Drawer = (props) => (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ height: 150, backgroundColor: 'white', alignItems: "center", justifyContent: "center" }}>
            
          </View>
          <ScrollView>
      
            <DrawerItems {...props} />
      
          </ScrollView>
        </SafeAreaView>
      )
     const AppDrawerNav = createDrawerNavigator({
        Announcements: ContentStackNav,
        Attendance: Attendance,
        'Company Policies': CompanyPolicies,
        'Compensation Benefits': CompensationBenefits,
        'Working Condition': WorkingCondition,
        'Skills Development': SkillDevStack,
        Notifications: Notifications,
        'Send FeedBack': SendFeedBack,
        Logout: Logout,
      }, {
          contentComponent: Drawer,
      
          contentOptions: {
            activeTintColor: 'blue',
      
          }
        }
      )
      export default Home;