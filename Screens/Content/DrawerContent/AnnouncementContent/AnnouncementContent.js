import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Announcements } from '../Announce/AnnounceItems'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import CustomButton from '../../../../Components/Button/Button';
   class AnnouncementContent extends Component{
    state={
        AnnounceItems: Announcements
   }
     render(){
    return(
    <View style={styles.Container}>
    
    <View style={styles.TitleHolder}>
    
    {this.state.AnnounceItems.map((item, index) => (
    <Text key={index} style={styles.TitleText}>
    {item.AnnounceTitle1}
    </Text>
    ))}
    
    {this.state.AnnounceItems.map((item, index) => (
    <Text key={index} style={styles.TitleText}>
    {item.AnnounceTitle2}
    </Text>
    ))}
    {this.state.AnnounceItems.map((item, index) => (
    <Text key={index} style={styles.TitleText}>
    {item.AnnounceTitle3}
    </Text>
    ))}
    </View>
   
<View style={styles.DatePostHolder}>
<View style={styles.DateHolder}>
<Icon name="ios-eye" size={15} color="#FF5A5F"/>

        {this.state.AnnounceItems.map((item, index) => (
<Text key={index} style={styles.DatePostText}>{item.Date}</Text>
))}
</View>
<View style={styles.PosterHolder}>
<FontAwesome name="user" size={15} color="#FF5A5F"/>
        {this.state.AnnounceItems.map((item, index) => (
<Text key={index} style={styles.DatePostText}>{item.Poster}</Text>
))}
</View>

</View>
<View style={styles.DetailHolder}>
        
        {this.state.AnnounceItems.map((item, index) => (
        <Text key={index} style={styles.TextDetail}>{item.Message}</Text>
        ))}
        </View>


        
        <View style={styles.DistributionTextHolder}>
        <Text style={styles.DistributeText}>DISTRIBUTION SCHEDULE</Text>
        </View>
        <View style={styles.DateDisHolder}>
        <Text style={styles.Datetext}>
        December 18-20, 2017 - 2:00 - 4:00 pm
        </Text>
        </View>
        <View style={styles.ReceptionHolder}>
        <Text style={styles.RecepText}>
        Reception Area, Lower Penthouse
        </Text>
        </View>
        <View style={styles.ContactHolder}>
        <Text style={styles.ContactText}>
        For Client-Based, please contact Alyssa (atarranza@yondu.com) for delivery                                                    schedule.
        </Text>
        </View>
        <View style={styles.ButtonHolder}>
        <CustomButton>Send Feedback</CustomButton>
        </View>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"white"
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
    TitleHolder:{
        maxHeight:500,
        marginTop:20,
        backgroundColor:"white"
    },
    DetailHolder:{
        flex:.8,
        backgroundColor:"white",
        // justifyContent:"space-around",
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
    TextDetail:{
        fontSize:21,
        color:"#9B9EA0"
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
    },
    TitleText:{
        fontSize:30,
        fontWeight:"bold",
        marginLeft:20
    },
    DistributionTextHolder:{
        flex:.6,
        justifyContent:"center",
        marginLeft:20,
        marginRight:20
    },
    DistributeText:{
        fontSize:20,
        fontWeight:"bold"
    },
    DateDisHolder:{
        flex:.4,
        marginLeft:20,
        marginRight:20,
    },
    Datetext:{
        fontSize:18,
        color:"#9B9EA0"
    },
    ReceptionHolder:{
        flex:.4,
        marginLeft:20,
        marginRight:20,
    },
    RecepText:{
        fontSize:18,
        color:"#9B9EA0",
    },
    ContactHolder:{
        flex:2,
        marginLeft:20,
        marginRight:20,
    },
    ContactText:{
        fontSize:18,
        color:"#9B9EA0"
    },
    ButtonHolder:{
        flex:.8,
    }
    })
export default AnnouncementContent;