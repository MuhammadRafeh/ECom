import React, { useState } from 'react';
import { View, StatusBar, Text, ScrollView, StyleSheet } from 'react-native';
import AbstractButton from '../../Components/button';
import CreditIcon from '../../Assets/icons/checkoutScreen/credit.svg';
import MobileMoneyIcon from '../../Assets/icons/checkoutScreen/mobile.svg';
import BankIcon from '../../Assets/icons/checkoutScreen/bank.svg';
import PayIcon from '../../Assets/icons/checkoutScreen/store.svg';
import constants from '../../../constants/constants';
import { LARGE } from '../../../constants/fonts';
import AbstractHeader from '../../../components/UI/Header';
import AbstractTextPicker from '../../../components/UI/TextPicker';

const CheckoutScreen = (props: any) => {
    const [value, setValue] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const [card, setCard] = useState(true);

    const handlePress = () => setExpanded(!expanded);
    const handleCards = () => setCard(!card);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={constants.secondary} barStyle={'dark-content'} />
            {/* Header */}
            <AbstractHeader title={'Checkout'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.viewStyle}>
                {/* Items */}
                <CheckoutItem
                    Element={props => <CreditIcon />}
                    title={'Credit or Debit Card'}
                />
                <CheckoutItem
                    Element={props => <MobileMoneyIcon />}
                    title={'Mobile Money'}
                    borderColor={constants.primary}
                    selected={true}
                />
                <CheckoutItem Element={props => <BankIcon />} title={'Bank Transfer'} />
                <CheckoutItem Element={props => <PayIcon />} title={'Pay in Store'} />
                <View style={styles.dividerStyle} />

                {/* Bank Picker */}
                <Text style={styles.headingStyle}>Select Bank</Text>
                <AbstractTextPicker
                    title={'Select Preffered Bank'}
                    items={[
                        { label: 'Select Preffered Bank', value: 'Select Preffered Bank' },
                        { label: 'Allied', value: 'Allied' },
                        {
                            label: 'HBL',
                            value: 'HBL',
                        },
                        {
                            label: 'Meezan',
                            value: 'Meezan',
                        },
                    ]}
                    onSelect={pickerValue => setValue({ classValue: pickerValue })}
                />
                {/* Button */}
                <View style={{ height: 50 }} />
                <AbstractButton buttonText={'Buy Now'} />
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.secondary,
    },
    viewStyle: {
        flex: 1,
        flexGrow: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    dividerStyle: {
        height: 1.5,
        backgroundColor: constants.primary,
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
    },
    headingStyle: {
        fontSize: LARGE,
        paddingBottom: 5,
        fontWeight: 'bold',
        color: constants.black,
    },
});
