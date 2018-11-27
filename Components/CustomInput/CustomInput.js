import React from 'react'
import { TextInput,StyleSheet,View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
const CustomInput = props =>(
    <View style={styles.CustomInputContainer}>
    <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={styles.input}
    placeholder={props.placeholder}
    
    />
    {  props.eye &&
    <TouchableOpacity style={styles.position} onPress={this.togglePass}>
    <Icon  name="eye" size={25} color='#95989A' />
</TouchableOpacity>
    }
</View>

)

const styles = StyleSheet.create({
    input:{
        width: "80%",
        // padding: 5,
        borderWidth:2,
        borderColor:"#F6F6F5",
        borderRadius: 5,
        backgroundColor: '#F6F6F5',
       
        
    }
    ,
    CustomInputContainer:{
        width: '80%',
        margin:10,
       flexDirection: 'row',
       backgroundColor:"#F6F6F5" ,
       alignItems: 'center'
    }
})

export default CustomInput;