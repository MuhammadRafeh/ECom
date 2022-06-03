import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { hP } from '../../../../functions/getDPFromPercent';

const LoginScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <View style={styles.firstPortion}>
                
            </View>
            <View style={styles.lastPortion}>
                
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
    },
    firstPortion: {
        height: hP('30')
    },
    lastPortion: {
        height: hP('70')
    }
})
