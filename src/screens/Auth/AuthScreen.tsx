import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AuthTopTabNavigator from '../../navigators/AuthNavigator/AuthTopTabNavigator/AuthTopTabNavigator';

const Auth = (props: any) => {
    return (
        <View style={styles.screen}>
            <AuthTopTabNavigator />
        </View>
    );
}

export default Auth;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})
