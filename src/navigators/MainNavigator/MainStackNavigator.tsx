import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/Auth/AuthScreen';
import OnBoardingScreen from '../../screens/OnBoardingScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'MainDrawer'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MainDrawer" component={OnBoardingScreen} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator