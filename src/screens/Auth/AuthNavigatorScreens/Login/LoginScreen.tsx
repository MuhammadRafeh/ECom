import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import constants from '../../../../constants/constants';
import { hP, wP } from '../../../../functions/getDPFromPercent';

const LoginScreen = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={{ width: wP('80%'), height: hP('7%') }}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={{ borderBottomWidth: 1, borderBottomColor: constants.primary, opacity: 0.62 }}
                    />
                </View>
                <View style={{ width: wP('80%'), height: hP('7%') }}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={{ borderBottomWidth: 1, borderBottomColor: constants.primary, opacity: 0.62 }}
                    />
                </View>
                <View>
                    <Text>Forgot Password?</Text>
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
    }
})
