import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../../../../components/UI/Button';
import constants from '../../../../constants/constants';
import { hP, wP } from '../../../../functions/getDPFromPercent';
import Fb from '../../../../../assets/images/auth/facebook.svg';
import Apple from '../../../../../assets/images/auth/apple.svg';
import Google from '../../../../../assets/images/auth/google.svg';
import EmailSvg from '../../../../../assets/images/auth/email.svg';
import PasswordSvg from '../../../../../assets/images/auth/password.svg';

const LoginScreen = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <View style={{ width: '100%', marginTop: 20 }}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.textInput}
                    />
                    <View style={{ position: 'absolute', bottom: 14.8, left: 16 }}>
                        <EmailSvg />
                    </View>
                </View>
                <View style={{ width: '100%', height: hP('7%'), marginTop: 10 }}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.textInput}
                    />
                    <View style={{ position: 'absolute', bottom: 16, left: 16 }}>
                        <PasswordSvg />
                    </View>
                </View>
                <TouchableOpacity style={{ marginTop: 4, marginBottom: 6 }}>
                    <Text style={styles.forgotLabel}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', height: hP('5.5%'), marginTop: 10 }}>
                    <Button onPress={() => { alert('Button Pressed!') }} title={'Sign in'} />
                </View>
                <View style={styles.signupLabel}>
                    <Text style={{ textAlign: 'center', color: '#808080', fontFamily: 'Inter' }}>Don’t have an account? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontFamily: 'Inter' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 52, justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <Google />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Fb />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Apple />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 83 }}>
                    <Text style={styles.info}>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat.
                    </Text>
                </View>
                <TouchableOpacity style={{ marginTop: 15 }}>
                    <Text style={styles.skip}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollViewStyle: {
        marginHorizontal: '8%',
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: constants.primary,
        opacity: 0.62,
        padding: 10,
        paddingLeft: 54,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.70)'
    },
    forgotLabel: {
        textAlign: 'right',
        marginRight: 2,
        color: constants.primary,
        fontSize: 12,
        fontFamily: 'Inter'
    },
    signupLabel: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Inter',
        fontSize: 12,
        letterSpacing: 0.2
    },
    skip: {
        textAlign: 'right',
        color: constants.primary,
        fontFamily: 'Inter'
    }
})
