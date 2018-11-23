import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Announcements extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.AnnounceTextHolder}>
                    <Text style={styles.AnnounceText}>Announcements</Text>
                </View>
                <View style={styles.Body}>
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
        backgroundColor:"red"
    }
})
export default Announcements;