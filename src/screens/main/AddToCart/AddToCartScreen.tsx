import React, { useState } from 'react';
import { View, StatusBar, Text, ScrollView, StyleSheet } from 'react-native';

import CreditIcon from '../../Assets/icons/checkoutScreen/credit.svg';
import MobileMoneyIcon from '../../Assets/icons/checkoutScreen/mobile.svg';
import BankIcon from '../../Assets/icons/checkoutScreen/bank.svg';
import PayIcon from '../../Assets/icons/checkoutScreen/store.svg';
import constants from '../../../constants/constants';
import { LARGE } from '../../../constants/fonts';
import AbstractHeader from '../../../components/UI/Header';
import AbstractButton from '../../../components/UI/Button2';
import AbstractTextPicker from '../../../components/UI/TextPicker';
import CheckoutItem from '../../../components/payments/Checkout/CheckoutItem';

const AddToCartScreen = (props: any) => {
    const [value, setValue] = useState<string>('');
    const [expanded, setExpanded] = useState<boolean>(true);
    const [card, setCard] = useState<boolean>(true);

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
                    Element={() => <CreditIcon />}
                    title={'Credit or Debit Card'}
                />
                <CheckoutItem
                    Element={() => <MobileMoneyIcon />}
                    title={'Mobile Money'}
                    borderColor={constants.primary}
                    selected={true}
                />
                <CheckoutItem Element={() => <BankIcon />} title={'Bank Transfer'} />
                <CheckoutItem Element={() => <PayIcon />} title={'Pay in Store'} />
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
                    onSelect={(pickerValue: string) => setValue(pickerValue)}
                />
                {/* Button */}
                <View style={{ height: 50 }} />
                <AbstractButton buttonText={'Buy Now'} />
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    );
};

export default AddToCartScreen;

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
