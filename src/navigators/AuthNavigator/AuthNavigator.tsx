import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/Auth/AuthScreen';
import OnBoardingScreen from '../../screens/OnBoardingScreen';
import PrivacyPolicyScreen from '../../screens/app/PrivacyPolicy/PrivacyPolicyScreen';
import RateAppScreen from '../../screens/app/RateApp/RateAppScreen';
import TermOfUseScreen from '../../screens/app/TermOfUse/TermOfUseScreen';

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
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
            <Stack.Screen name="RateApp" component={RateAppScreen} />
            <Stack.Screen name="TermOfUse" component={TermOfUseScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator