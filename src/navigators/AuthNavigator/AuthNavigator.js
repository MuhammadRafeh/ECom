import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/Auth/AuthScreen';
import OnBoardingScreen from '../../screens/OnBoardingScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'OnBoarding'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator