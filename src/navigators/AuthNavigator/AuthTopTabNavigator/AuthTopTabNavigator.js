import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function AuthTopTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={HomeScreen} />
            <Tab.Screen name="Signup" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default AuthTopTabNavigator;