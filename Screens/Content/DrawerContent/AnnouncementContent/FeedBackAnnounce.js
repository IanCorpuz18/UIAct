import React, { Component } from 'react'
import {View,Text,StyleSheet, TextInput, Alert} from 'react-native'
import CustomButton from '../../../../Components/Button/Button';

   class AnnounceFeedBack extends Component{
    alertHolder=() => {
        Alert.alert(
            'Feedback Sent',
            'Your feedback has been sent.You will be notified once the recepient replied.',
            [
         
              {text: 'OK', onPress: () => this.props.navigation.navigate('AnnouncementsHome')},
            ],
            { cancelable: false }
          )
     }
     render(){
    return(
    <View style={styles.Container}>
    <View style={styles.ContentHolder}>
        <Text style={styles.ContentText}>Send Feedback</Text>
        </View>
    <View style={styles.TitleHolder}>
    <Text style={styles.Title}>
    Re: The Yondu Jacket:                          Keeping you warm...
    </Text>
    
    </View>
    <View style={styles.TextInputHolder}>
    <TextInput style={styles.InputFeedback} 
    multiline={true}
    placeholder="LOREM IPSUM" />
    </View>
    <View style={styles.ButtonHolder}>
    <CustomButton onPress={this.alertHolder}>Submit</CustomButton>
    <CustomButton onPress={() => this.props.navigation.goBack()} bgColor={{backgroundColor:"white"}} textColor={{color:"#FF5A5F"}}>Cancel</CustomButton>
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
    ContentHolder:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        marginLeft:20,
    },
    ContentText:{
        fontSize:20,
        fontWeight:"bold"
    },
    TitleHolder:{
        flex:1.1,
        backgroundColor:"white",
        marginLeft:20,
    },
    Title:{
        fontSize:25,
        fontWeight: 'bold',
    },
    TextInputHolder:{
        flex:6, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },
    ButtonHolder:{
        flex:2.5,
        justifyContent: "center",
    },
    InputFeedback:{
        width:"90%",
        height:"90%",
        backgroundColor:"#F7F7F7",
        
    }
    })
export default AnnounceFeedBack;