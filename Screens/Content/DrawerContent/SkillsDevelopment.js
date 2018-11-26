import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import SkillsDevContent from "./SkillsContent/SkillDevContent"
class SkillsDevelopment extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.AnnounceTextHolder}>
                    <Text style={styles.AnnounceText}>Skill Development</Text>
                </View>
                <View style={styles.Body}>

               <ScrollView >
                <SkillsDevContent  Nav={() => this.props.navigation.navigate('SkillsNextPage')}  />
                <SkillsDevContent  Nav={() => this.props.navigation.navigate('SkillsNextPage')}  />
                <SkillsDevContent  Nav={() => this.props.navigation.navigate('SkillsNextPage')}  />
                <SkillsDevContent  Nav={() => this.props.navigation.navigate('SkillsNextPage')} />
                <SkillsDevContent  Nav={() => this.props.navigation.navigate('SkillsNextPage')}  />
                <SkillsDevContent  Nav={() => this.props.navigation.navigate('SkillsNextPage')}  />
                </ScrollView>
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
    Content:{
        flex:2.5
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
export default SkillsDevelopment;