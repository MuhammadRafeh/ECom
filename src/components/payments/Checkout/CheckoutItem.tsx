import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import constants from '../../../constants/constants';
import Icon from '@expo/vector-icons/FontAwesome5';
import { LARGE } from '../../../constants/fonts';

const CheckoutItem = (props: any) => {
    const { Element, title, borderColor, selected } = props;
    return (
        <Ripple
            rippleContainerBorderRadius={15}
            style={[
                styles.container,
                { borderColor: borderColor ? borderColor : '#000000' },
            ]}>
            <View style={[styles.flexStyle, { alignItems: 'center' }]}>
                {Element(props)}
            </View>
            <View style={[styles.flexStyle, { flex: 4 }]}>
                <Text style={{ fontSize: LARGE, color: '#000000', fontWeight: 'bold' }}>
                    {title}
                </Text>
            </View>
            {selected && (
                <View style={[styles.flexStyle, { alignItems: 'center' }]}>
                    <View
                        style={[styles.checkboxStyle, { backgroundColor: constants.primary }]}>
                        <Icon name="check" size={17} color={constants.secondary} />
                    </View>
                </View>
            )}
        </Ripple>
    );
};

export default CheckoutItem;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
    },
    flexStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    checkboxStyle: {
        height: 25,
        width: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
