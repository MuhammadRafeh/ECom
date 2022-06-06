import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import constants from '../../../constants/constants';
import { hP } from '../../../functions/getDPFromPercent';
import Constants from 'expo-constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import getFontSize from '../../../functions/getFontSize';

const PrivacyPolicyScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <View style={{ height: hP('12%'), backgroundColor: constants.primary, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: -8 }}>
                <TouchableOpacity style={{ position: 'absolute', left: '5%' }}>
                    <MaterialIcons size={28} color={'white'} name={'keyboard-arrow-left'} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: getFontSize(17), fontFamily: 'Inter', color: '#fff', fontWeight: 'bold' }}>Privacy Policy</Text>
                </View>
            </View>
            <View style={{ height: hP('88%'), backgroundColor: '#fff', alignItems: 'center' }}>
                <View style={{ height: '100%', width: '85%', backgroundColor: '#fff', borderRadius: 24, padding: 20, top: -28 }}>
                    <ScrollView>
                        <Text style={{ textAlign: 'justify', fontFamily: 'Inter', fontSize: 16 }}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
                        </Text>
                    </ScrollView>
                </View>
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
