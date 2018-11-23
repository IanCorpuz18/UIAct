import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
class Announcements extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.AnnounceTextHolder}>
                    <Text style={styles.AnnounceText}>Announcements</Text>
                </View>
                <View style={styles.Body}>
                <View style={styles.Contents}>
                <View style={styles.AnnouncementTitleHolder}>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AnnouncementsContents')}>
                    <Text style={styles.AnnounceTitleText}>The Yondu Jacket:</Text>
                   
                    <Text style={styles.AnnounceTitleText}>Keeping you warm this</Text>
                    <Text style={styles.AnnounceTitleText}>Christmas</Text>
                    </TouchableOpacity>
                </View>
              
                <View style={styles.DatePostHolder}>
                <View style={styles.DateHolder}>
                <Icon name="ios-eye" size={12}/>
                <Text style={styles.DatePostText}>DECEMBER 01-05, 2017</Text>
                </View>
                <View style={styles.PosterHolder}>
                <Icon name="ios-person" size={12}/>
                <Text style={styles.DatePostText}>HUMAN RESOURCES</Text>
                </View>
                </View>
              
                <View style={styles.DetailHolder}>
                <Text style={styles.TextDetail}>In lieu of Christmas Ham, we are giving</Text>
                <Text style={styles.TextDetail}>you a Yondu Jacket as a Christmas</Text>
                <Text style={styles.TextDetail}>present</Text>
                </View>
               
                </View>
                <View style={styles.ContentDetailHolder}>
                </View>
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
        // flex: 1,
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
    Contents:{
        flex:2.5,
        backgroundColor:"pink"
    },
    AnnouncementTitleHolder:{
            flex:1.1,
            backgroundColor:"white"
    },
    DetailHolder:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20
    },
    AnnounceTitleText:{
        fontSize:24,
        fontWeight:"bold",
        marginLeft:20
    },
    DatePostHolder:{
        flex:.4,
        flexDirection: 'row',
        // justifyContent:"space-around"
        marginLeft:20,
        // justifyContent:"space-around"
    },
    ContentDetailHolder:{
        flex:5,
        backgroundColor:"green"
    },
    TextDetail:{
        fontSize:16
    },
    DatePostText:{
        fontSize:12,
        marginLeft:5
    },
    DateHolder:{
        flexDirection:"row",
        alignItems: 'center',
    },
    PosterHolder:{
        flexDirection:"row",
        alignItems: 'center',
        marginLeft:20
    }
})
export default Announcements;