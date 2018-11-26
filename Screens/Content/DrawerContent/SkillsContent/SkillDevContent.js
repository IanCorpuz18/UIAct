import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import FontAwesome  from "react-native-vector-icons/FontAwesome5"
import { Skills } from "../SkillsContent/SkillsItems"
   class SkillDevContent extends Component{
       state={
            SkillsItems: Skills
       }
     render(){
    return(
        
        <View style={styles.Content}>
        
        <View style={styles.AnnouncementTitleHolder}>
        
        {this.state.SkillsItems.map((item, index) => (
  <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('AnnouncementsContents')}>
  <Text style={styles.AnnounceTitleText}>{item.AnnounceTitle1}</Text>
  </TouchableOpacity>
  ))}
</View>
        <View style={styles.DetailHolder}>
        
        {this.state.SkillsItems.map((item, index) => (
        <Text key={index} style={styles.TextDetail}>{item.Message}</Text>
        ))}
        </View>
        
        <View style={styles.BorderBottom}>
        </View>
      
        </View>
        
    )
    }
    }
    
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white"
    },
    AnnounceTextHolder: {
        minHeight:30,
        margin: 20,
        justifyContent: 'space-around',
    },
    AnnounceText:{
        fontWeight:"bold",
        fontSize:20
    },
    Body: {
        flex:6,
        backgroundColor:"white"
    },
    Content:{
        flex:3,
        marginBottom: 20,
       
    },
    AnnouncementTitleHolder:{
            backgroundColor:"white",
            minHeight:50
    },
    DetailHolder:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20,
        marginRight:20
    },
    AnnounceTitleText:{
        fontSize:30,
        fontWeight:"bold",
        marginLeft:20
    },
    DatePostHolder:{
        minHeight:45,
        flexDirection: 'row',
        marginLeft:20,
    },
    ContentDetailHolder:{
        flex:5,
        backgroundColor:"green"
    },
    TextDetail:{
        fontSize:21,
        color:"gray"
    },
    DatePostText:{
        fontSize:15,
        marginLeft:5,
        color:"#FF5A5F"
    },
    DateHolder:{
        flexDirection:"row",
        alignItems: 'center',
    },
    PosterHolder:{
        flexDirection:"row",
        alignItems: 'center',
        marginLeft:20
    },
    BorderBottom:{
        borderBottomColor: "#ECECEC",
        borderBottomWidth:1,
        width:"100%",
        minHeight:25,
        marginLeft:20,
       width:"90%"
    }
})
export default SkillDevContent;