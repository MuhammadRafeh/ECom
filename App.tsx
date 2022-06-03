import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello this is text</Text>
      </View>
    </NavigationContainer>
  );
}