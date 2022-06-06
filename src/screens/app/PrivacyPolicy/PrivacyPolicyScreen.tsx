import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import constants from '../../../constants/constants';
import { hP } from '../../../functions/getDPFromPercent';
import Constants from 'expo-constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import getFontSize from '../../../functions/getFontSize';

const PrivacyPolicyScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <View style={{ height: hP('12%'), backgroundColor: constants.primary, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: -8 }}>
                <TouchableOpacity style={{ position: 'absolute', left: 15 }}>
                    <MaterialIcons size={28} color={'white'} name={'keyboard-arrow-left'} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: getFontSize(17), fontFamily: 'Inter', color: '#fff' }}>Privacy Policy</Text>
                </View>
            </View>
            <View style={{ height: hP('88%'), backgroundColor: '#fff' }}>

            </View>
        </View>
    );
}

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: constants.primary,
        paddingTop: Constants.statusBarHeight
    }
})
