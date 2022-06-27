import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainBottomTabNavigator from './MainBottomTabNavigator';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'MainDrawer'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MainDrawer" component={MainBottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;