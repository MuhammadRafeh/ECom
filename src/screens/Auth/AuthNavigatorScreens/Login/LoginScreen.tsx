import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Button from '../../../../components/UI/Button';
import constants from '../../../../constants/constants';
import { hP, wP } from '../../../../functions/getDPFromPercent';
import Fb from '../../../../../assets/images/auth/facebook.svg';
import Apple from '../../../../../assets/images/auth/apple.svg';
import Google from '../../../../../assets/images/auth/google.svg';

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
                        style={{ borderBottomWidth: 1, borderBottomColor: constants.primary, opacity: 0.62, padding: 10 }}
                    />
                </View>
                <View style={{ width: '100%', height: hP('7%'), marginTop: 10 }}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={{ borderBottomWidth: 1, borderBottomColor: constants.primary, opacity: 0.62, padding: 10 }}
                    />
                </View>
                <View>
                    <Text style={{ textAlign: 'right', marginRight: 2 }}>Forgot Password?</Text>
                </View>
                <View style={{ width: '100%', height: hP('5.5%'), marginTop: 10 }}>
                    <Button onPress={() => { alert('asd') }} title={'asd'} />
                </View>
                <View>
                    <Text>Don’t have an account? <Text>Sign Up</Text></Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Google />
                    </View>
                    <View>
                        <Fb />
                    </View>
                    <View>
                        <Apple />
                    </View>
                </View>
                <View>
                    <Text>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat.
                    </Text>
                </View>
                <View>
                    <Text>
                        Skip
                    </Text>
                </View>
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
        // alignItems: 'center'
    }
})
