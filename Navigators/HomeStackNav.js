import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import UserLogin from '../Screens/Registration/UserLogIn'
import CreateAccount from '../Screens/Registration/CreateAccount'
import AccountConfirmed from '../Screens/Registration/AccountConfirmed'
import Home from '../Screens/Content/Home'

export default HomeStackNav = createStackNavigator({
    UserLogin:UserLogin,
    AccountConfirmed:AccountConfirmed,
    CreateAccount:CreateAccount,
    Home:Home


},
    {
        navigationOptions:{
            header:null
        }
    }

    
)