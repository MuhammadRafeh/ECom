import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { hP } from '../../functions/getDPFromPercent';
import AuthTopTabNavigator from '../../navigators/AuthNavigator/AuthTopTabNavigator/AuthTopTabNavigator';
import constants from '../../constants/constants';

const AuthScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <View style={styles.firstPortion}>

            </View>
            <View style={styles.lastPortion}>
                <AuthTopTabNavigator />
            </View>
        </View>
    );
}

export default AuthScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: constants.secondary,
        paddingTop: Constants.statusBarHeight
    },
    firstPortion: {
        height: hP('24'),
        backgroundColor: constants.primary
    },
    lastPortion: {
        height: hP('76')
    }
})
