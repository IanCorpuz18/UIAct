import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import CustomButton from '../../../../Components/Button/Button';

   class SkillsNextPage extends Component{
     render(){
    return(
    <View style={styles.Container}>
    <View style={styles.TitleHolder}>
        <Text style={styles.TitleText}>UX Fundamentals</Text>
        </View>

        <View style={styles.ContentHolder}>
            <Text  style={styles.ContentText}>
                LOrem Ipsum
            </Text>
        </View>
        <View style={styles.DetailsHolder}>
        <View style={styles.WhenHolder}>
        <Text style={styles.WhenText}>
        When:
        </Text>
        <Text style={styles.WhenContent}> Lrem Ipsum</Text>
        </View>
        <View style={styles.WhereHolder}>
        <Text style={styles.WhereText}>
        Where:  </Text>
        <Text style={styles.WhereContent}>Lrem Ipsum</Text>
       
        </View>
        <View style={styles.WhoHolder}>
        <Text style={styles.WhoText}>
        Who: </Text>
        <Text style={styles.WhoContent}> Lrem Ipsum</Text>
       
        </View>
        <View style={styles.RemainingHolder}>
        <Text style={styles.RemainingText}>
        Remaining Slots:  </Text>
        <Text style={styles.ReContent}> Lrem Ipsum
        </Text>
        </View>
        </View>
        <View style={styles.OtherInfoHolder}>
        <Text style={styles.OtherInfoText}>
        Ut enim
        </Text>
        </View>
        <View style={styles.UsernameHolder}>
        <Text style={styles.UsernameText}>
        Ut enim  Ut enim  Ut enim  Ut enim  Ut enim
        </Text>
        </View>
        <View style={styles.ButtonHolder}>
        <CustomButton onPress={() => this.props.navigation.goBack()}>Join</CustomButton>
        
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
        flex:.7,
        backgroundColor:"white",
        marginLeft: 20,
        justifyContent:"center"
    },
    TitleText:{
        fontSize:20,
        fontWeight: 'bold',

    },
    ContentHolder:{
        flex:2,
        backgroundColor:"white",
        marginLeft: 20,
    },
    ContentText:{
        fontSize:17,
        color:"#AFB2B3"
    },
    DetailsHolder:{
        flex:2,
        backgroundColor:"white",
        marginLeft: 20,
    },
    WhenHolder:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row"
    },
    WhenText:{
        fontSize:17,
        color:"black",
        fontWeight:"bold"
    },
    WhenContent:{
        fontSize:17,
        color:"#979A9C",
    },
    WhereContent:{
        fontSize:17,
        color:"#979A9C",
    },
    WhoContent:{
        fontSize:17,
        color:"#979A9C",
    },
    ReContent:{
        fontSize:17,
        color:"#979A9C",
    },
    WhereHolder:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row"
    },
    WhereText:{
        fontSize:17,
        color:"black",
        fontWeight:"bold"
    },
    WhoHolder:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row"
    },
    WhoText:{
        fontSize:17,
        color:"black",
        fontWeight:"bold"
    },
    RemainingHolder:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row"
    },
    RemainingText:{
        fontSize:17,
        color:"black",
        fontWeight:"bold"
    },
    OtherInfoHolder:{
        flex:1,
        backgroundColor:"white",
        marginLeft: 20,
    },
    OtherInfoText:{
        fontSize:17,
        color:"#AFB2B3"
    },
    UsernameHolder:{
        flex:3,
        backgroundColor:"white",
        marginLeft: 20,
    },
    UsernameText:{
        fontSize:17,
        color:"#AFB2B3"
    },
    ButtonHolder:{
        flex:1,
    }
    })
export default SkillsNextPage;