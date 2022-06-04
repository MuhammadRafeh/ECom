import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../constants/constants';
import Logo from "../../assets/images/UI/logo.svg";
import LogoText from "../../assets/images/onboarding/logoText.svg";

const OnBoarding = (props: any) => {
    useEffect(() => {
        setTimeout(() => props.navigation.replace('Auth'), 2);
    }, [])
    return (
        <View style={styles.screen}>
            <Logo />
            <View style={styles.logoText}>
                <LogoText />
            </View>
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
        marginTop: 10
    }
})
