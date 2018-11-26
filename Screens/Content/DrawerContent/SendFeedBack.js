import React, { Component } from 'react'
import {View,Text,StyleSheet, Picker, TextInput,Alert} from 'react-native'
import CustomButton from '../../../Components/Button/Button';

   class SendFeedBack extends Component{
     
       state={
        Subject:""
       }
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
    <View style={styles.TitleHolder}>
        <Text style={styles.TitleText}>Send FeedBack</Text>
        </View>
        <View style={styles.PickerHolder}>
        <Picker
  selectedValue={this.state.Subject}
  style={styles.PickerStyle}
  onValueChange={(itemValue, itemIndex) => this.setState({Subject: itemValue})}>
  <Picker.Item label="Select Subject" value="java" color="#9A9D9F" />
  <Picker.Item label="Select Subject" value="js" color="#9A9D9F" />
</Picker>
        </View>
    <View style={styles.TextInputHolder}>
    <TextInput style={styles.TextInput} placeholder="Enter Feedback"/>
    </View>
    <View style={styles.ButtonHolder}>
    <CustomButton onPress={this.alertHolder}>Submit</CustomButton>
    <CustomButton bgColor={{backgroundColor:"white"}} 
    onPress={() => this.props.navigation.navigate('Drawer')}
    textColor={{color:"#FF5A5F"}}>
    Cancel</CustomButton>
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
    TitleHolder:{
        flex:.6,
        marginLeft: 20,
        justifyContent:"center"
    },
    TitleText:{
        fontSize:20,
        fontWeight: 'bold',
    },
    PickerHolder:{
        flex:.4,
        marginLeft: 20,
        backgroundColor:"#F7F7F7",
        marginRight: 20,
    },
    PickerStyle:{
        width:"90%",
        height:"100%"
    },
    TextInputHolder:{
        flex:3,
        margin:20,
        backgroundColor:"white",
        
        
    },
    TextInput:{
        textAlign:"left",
        backgroundColor:"#F7F7F7",
        height:"100%",
        width:"100%"
    },
    ButtonHolder:{
        flex:1
    },

    })
export default SendFeedBack;