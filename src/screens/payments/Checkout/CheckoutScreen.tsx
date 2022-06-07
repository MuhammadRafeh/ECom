import React, {useState} from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import styles from './styles';
import AbstractHeader from '../../Components/header';
import AbstractButton from '../../Components/button';
import AbstractTextPicker from '../../Components/textPicker';
import CheckoutItem from '../../Components/checkoutItem';
import CreditIcon from '../../Assets/icons/checkoutScreen/credit.svg';
import MobileMoneyIcon from '../../Assets/icons/checkoutScreen/mobile.svg';
import BankIcon from '../../Assets/icons/checkoutScreen/bank.svg';
import PayIcon from '../../Assets/icons/checkoutScreen/store.svg';
import constants from '../../../constants/constants';

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
            {label: 'Select Preffered Bank', value: 'Select Preffered Bank'},
            {label: 'Allied', value: 'Allied'},
            {
              label: 'HBL',
              value: 'HBL',
            },
            {
              label: 'Meezan',
              value: 'Meezan',
            },
          ]}
          onSelect={pickerValue => setValue({classValue: pickerValue})}
        />
        {/* Button */}
        <View style={{height: 50}} />
        <AbstractButton buttonText={'Buy Now'} />
        <View style={{height: 20}} />
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
