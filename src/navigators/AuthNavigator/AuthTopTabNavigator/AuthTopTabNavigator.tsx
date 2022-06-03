import React from 'react';
import { View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../../../screens/Auth/AuthNavigatorScreens/Login/LoginScreen';
import SignupScreen from '../../../screens/Auth/AuthNavigatorScreens/Signup/SignupScreen';
import constants from '../../../constants/constants';

const { width } = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

function AuthTopTabNavigator() {
    return (
        <>
            <Tab.Navigator
                initialLayout={{ width }}
                screenOptions={{
                    tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
                    tabBarStyle: { elevation: 0 },
                    tabBarIndicatorStyle: { width: width / 3, backgroundColor: constants.primary, left: width / 12, height: 3 }
                }}
            >
                <Tab.Screen name="Login" component={LoginScreen} options={{ title: 'Log in' }} />
                <Tab.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
            </Tab.Navigator>
            <View style={{ position: 'absolute', height: 2, width: (width / 3 + width / 1.9), backgroundColor: 'grey', top: 46, alignSelf: 'center', opacity: 0.1 }} />
        </>
    );
}

export default AuthTopTabNavigator;