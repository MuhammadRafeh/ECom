import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../../screens/Auth/Auth';
import OnBoarding from '../../screens/OnBoarding';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    );
}

export default AuthNavigator