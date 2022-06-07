import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator/AuthNavigator';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { useEcomContext } from './src/contexts/ContextProvider';
import MainStackNavigator from './src/navigators/MainNavigator/MainStackNavigator';

export default function App() {
  const { auth } = useEcomContext();
  let [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/inter.ttf'),
  });

  if (!fontsLoaded) {
    return <View />
  }

  return (
    <NavigationContainer>
      {
        auth ? (
          <AuthNavigator />
        ) : (
          <MainStackNavigator />
        )
      }
    </NavigationContainer>
  );
}