import React, { Component } from 'react'
import {View,Text,StyleSheet, TextInput} from 'react-native'
import LocalImage from '../../Components/LocalImage/LocalImage';
import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButton from "../../Components/Button/Button"
import LocalImageBottom from "../../Components/LocalImage/LocalImageBottom"
   class UserLogin extends Component{
     render(){
    return(
    <View style={styles.Container}>
                <View style={styles.LogoHolder}>
                <LocalImage 
                    source={require('../../assets/images/airbnb_logo.png')} 
                    originalWidth={2000}
                    originalHeight={625}
                    />
                </View>
                <View style={styles.UserLoginTextHolder}>
                    <Text style={styles.UserLoginText}>Create an Account</Text>
                </View>
                <View style={styles.TextInputHolder}>
                    <CustomInput placeholder={"Enter Yondu Email"} />
                    <CustomInput  placeholder={"Password"} />
                    <CustomInput  placeholder={"Confirm Password"} />
                </View>
               
                <View style={styles.ButtonHolder}>
                <CustomButton onPress={() => this.props.navigation.navigate('AccountConfirmed')}
                >Submit</CustomButton>
                <CustomButton onPress={() => this.props.navigation.goBack()}
                 bgColor={{backgroundColor:"white"}} textColor={{color:"#FF5A5F"}}>Cancel</CustomButton>
                </View>
              
                <View style={styles.YonduTextHolder}>
                <LocalImageBottom
                  source={require('../../assets/images/yondu.jpg')} 
                  originalWidth={361}
                  originalHeight={79}
                />
                </View>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"white",
        flexDirection: 'column',
    },
    LogoHolder:{
        flex:3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },
    UserLoginTextHolder:{
        flex:.5,
        backgroundColor:"white",
        alignItems:"center"
    },
    TextInputHolder:{
        flex:3,
        backgroundColor:"white",
        alignItems:"center"
    },
    ForgotPassTextHolder:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        
    },
    ButtonHolder :{
    flex:2,
        backgroundColor:"white",
        marginTop:15,
    },
    YonduTextHolder:{
        flex:2.5,
        backgroundColor:"white",
        
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"
    },
    UserLoginText:{
        fontWeight:"bold",
    fontSize:18
        
    },
    ForgotPassText:{
        color:"#68C2C4",
        fontWeight:"bold",
        fontSize:15
    },
    YonduText:{
        color:"#FF5A5F",
        fontSize:30,
        fontWeight:"bold"
    }
    })
export default UserLogin;