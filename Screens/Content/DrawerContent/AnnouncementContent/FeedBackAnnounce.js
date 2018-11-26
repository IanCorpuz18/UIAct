import React, { Component } from 'react'
import {View,Text,StyleSheet, TextInput} from 'react-native'
import CustomButton from '../../../../Components/Button/Button';

   class AnnounceFeedBack extends Component{
     render(){
    return(
    <View style={styles.Container}>
    <View style={styles.ContentHoldder}>
        <Text style={styles.ContentText}>Send Feedback</Text>
        </View>
    <View style={styles.TitleHolder}>
    <Text style={styles.Title}>
    Re: The Yondu Jacket:
    Keeping you warm...
    </Text>
    
    </View>
    <View style={styles.TextInputHolder}>
    <TextInput style={styles.InputFeedback}/>
    </View>
    <View style={styles.ButtonHolder}>
    <CustomButton>Submit</CustomButton>
    <CustomButton>Cancel</CustomButton>
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
    ContentHoldder:{
        flex:1,
        backgroundColor:"white"
    },
    ContentText:{
        fontSize:20
    },
    TitleHolder:{
        flex:1,
        backgroundColor:"white"
    },
    Title:{
        fontSize:25,
        fontWeight: 'bold',
    },
    TextInputHolder:{
        flex:3
    },
    ButtonHolder:{
        flex:1
    }
    })
export default AnnounceFeedBack;