import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import UserLogin from '../Screens/Registration/UserLogIn'
import CreateAccount from '../Screens/Registration/CreateAccount'
import AccountConfirmed from '../Screens/Registration/AccountConfirmed'
import Home from '../Screens/Content/Home'
import SendFeedBackNav from './SendFeedbackStack';
export default HomeStackNav = createStackNavigator({
    UserLogin:UserLogin,
    AccountConfirmed:AccountConfirmed,
    CreateAccount:CreateAccount,
    SendFeedBackNav:SendFeedBackNav
    
},
    {
        navigationOptions:{
            header:null
        }
    }

    
)