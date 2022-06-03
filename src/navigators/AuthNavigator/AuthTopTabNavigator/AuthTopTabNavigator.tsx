import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../../../screens/Auth/AuthNavigatorScreens/Login/LoginScreen';
import SignupScreen from '../../../screens/Auth/AuthNavigatorScreens/Signup/SignupScreen';

const Tab = createMaterialTopTabNavigator();

function AuthTopTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Signup" component={SignupScreen} />
        </Tab.Navigator>
    );
}

export default AuthTopTabNavigator;