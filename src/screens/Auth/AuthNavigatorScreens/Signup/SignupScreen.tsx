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
import Person from '../../../../../assets/images/auth/person.svg';

const SignupScreen = (props: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [refferal, setRefferal] = useState('');

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <View style={{ width: '100%', marginTop: 20, justifyContent: 'center' }}>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.textInput}
                        placeholder={'Name'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.70)'}
                    />
                    <View style={{ position: 'absolute', left: 4 }}>
                        <Person />
                    </View>
                </View>
                <View style={{ width: '100%', height: hP('7%'), marginTop: 10, justifyContent: 'center' }}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.textInput}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.70)'}
                    />
                    <View style={{ position: 'absolute', left: 4 }}>
                        <EmailSvg />
                    </View>
                </View>
                <View style={{ width: '100%', height: hP('7%'), marginTop: 10, justifyContent: 'center' }}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.textInput}
                        placeholder={'Password'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.70)'}

                    />
                    <View style={{ position: 'absolute', left: 4 }}>
                        <PasswordSvg />
                    </View>
                </View>
                <View style={{ width: '100%', height: hP('7%'), marginTop: 10, justifyContent: 'center' }}>
                    <TextInput
                        value={refferal}
                        onChangeText={setRefferal}
                        style={styles.textInput}
                        placeholder={'Referal Code'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.70)'}

                    />
                    <View style={{ position: 'absolute', left: 4 }}>
                        <PasswordSvg />
                    </View>
                </View>

                <View style={{ width: '100%', height: hP('5.5%'), marginTop: 35 }}>
                    <Button onPress={() => { alert('Button Pressed!') }} title={'Sign Up'} />
                </View>
                <View style={styles.Or}>
                    <View style={{
                        borderStyle: 'dashed',
                        borderWidth: 0.8,
                        width: '46%',
                        borderColor: '#F69F21'
                    }} />
                    <View>
                        <Text style={{ fontFamily: 'Inter', color: 'rgba(0, 0, 0, 0.45)' }}>
                            Or
                        </Text>
                    </View>
                    <View style={{
                        borderStyle: 'dashed',
                        borderWidth: 0.8,
                        width: '46%',
                        borderColor: '#F69F21'
                    }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-around' }}>
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
            </ScrollView>
        </View>
    );
}

export default SignupScreen;

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
        paddingLeft: 42,
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
    Or: {
        marginVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
