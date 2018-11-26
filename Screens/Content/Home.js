import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Attendance from '../../Screens/Content/DrawerContent/Attendance'
import CompanyPolicies from '../../Screens/Content/DrawerContent/CompanyPolicies'
import CompensationBenefits from '../../Screens/Content/DrawerContent/CompensationBenefits'
import Notifications from '../../Screens/Content/DrawerContent/Notifications'
import SendFeedBack from '../../Screens/Content/DrawerContent/SendFeedBack'
import SkillsDevelopment from '../../Screens/Content/DrawerContent/SkillsDevelopment'
import WorkingCondition from '../../Screens/Content/DrawerContent/WorkingConditions'
import ContentStackNav from '../../Navigators/ContentStackNav'
import SkillDevStack from '../../Navigators/SkillDevStack'
import SendFeedbackNav from '../../Navigators/SendFeedbackStack'

// class Home extends Component {
//   render() {
//     return (

//       <AppDrawerNav style={{ backgroundColor: "red" }} />
//     )
//   }
// }

const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1, width:'100%' }}>

  <View style={styles.headView}>
      <Text style={styles.headText}>Welcome, Fritz!</Text>
  </View>

  <View style={styles.drawerView}>
      <DrawerItems {...props} />
  </View>

  <View style={styles.footView}>
    <TouchableOpacity onPress={() => props.navigation.navigate('SendFeedBackNav')}>
      <Text style={styles.footText}>Send Feedback</Text>
     
      </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('UserLogin')}>
      <Text style={styles.footText}>Logout</Text>
      </TouchableOpacity>
  </View>

</SafeAreaView>
)
export default AppDrawerNav = createDrawerNavigator({
  Announcements: ContentStackNav,
  Attendance: Attendance,
  'Company Policies': CompanyPolicies,
  'Compensation Benefits': CompensationBenefits,
  'Working Condition': WorkingCondition,
  'Skills Development': SkillDevStack,
  Notifications: Notifications,
  SendFeedBack: SendFeedbackNav
  
}, {
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width*.85,
    contentOptions: {
      activeTintColor: '#FF5A5F',
      labelStyle:{
        fontSize:20
      }
      
    }
  }
)
const styles = StyleSheet.create({
headView:{ 
flex:.4,
  justifyContent:"flex-start",
borderBottomColor: "#96999A",
borderBottomWidth: 1,
},
headText:{
fontSize:18,
color:"#96999A",
margin: 16,
},
drawerView:{
  flex:4,
borderBottomColor: "#96999A",
borderBottomWidth: 1,
},
footView:{
flex:1.5,
backgroundColor:"white",
margin: 10,
},
footText:{
fontSize:18,
color:"#96999A",
margin: 10,
}
})
// export default Home;