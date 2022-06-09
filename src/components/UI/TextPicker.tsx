import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import constants from '../../constants/constants';

const AbstractTextPicker = (props: any) => {
    const [pickerValue, setPickerValue] = useState('');
    const UpdateState = (pickerValue: any) => {
        setPickerValue(pickerValue);
        props.onSelect(pickerValue);
    };
    return (
        <View
            style={[styles.container, { width: props.width ? props.width : '100%' }]}>
            <View style={styles.viewStyle}>
                <Picker
                    mode="dropdown"
                    itemStyle={{ fontSize: 5 }}
                    selectedValue={pickerValue ? pickerValue : props.initialValue}
                    onValueChange={UpdateState}>
                    {props?.items?.map((item: any, key: number) => (
                        <Picker.Item label={item.label} value={item.value} key={key} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default AbstractTextPicker;

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignSelf: 'center',
    },
    viewStyle: {
        minHeight: 40,
        width: '100%',
        alignSelf: 'center',
        borderWidth: 1.3,
        paddingLeft: 8,
        backgroundColor: constants.secondary,
        borderTopColor: constants.secondary,
        borderRightColor: constants.secondary,
        borderBottomColor: constants.primary,
        borderLeftColor: constants.secondary,
    },
});
