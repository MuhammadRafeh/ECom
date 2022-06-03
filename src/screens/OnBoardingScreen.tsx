import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../constants/constants';

const OnBoarding = (props: any) => {
    useEffect(() => {
        setTimeout(() => props.navigation.replace('Auth'), 1);
    }, [])
    return (
        <View style={styles.screen}>
            <Image source={require('../../assets/images/UI/logo.png')} />
            <Image source={require('../../assets/images/onboarding/logoText.png')} style={styles.logoText} />
        </View>
    );
}

export default OnBoarding;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary
    },
    logoText: {
        marginTop: 13
    }
})
