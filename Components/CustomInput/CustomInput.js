import React from 'react'
import { TextInput,StyleSheet } from "react-native";

const CustomInput = props =>(
    <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={styles.input}
    placeholder={props.placeholder}
    
    />
)

const styles = StyleSheet.create({
    input:{
        width: "80%",
        padding: 5,
        margin: 8,
        borderWidth:2,
        borderColor:"#F6F6F5",
        borderRadius: 5,
        backgroundColor: '#F6F6F5',
        
    }
})

export default CustomInput;