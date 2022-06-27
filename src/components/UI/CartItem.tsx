import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import constants from '../../constants/constants';
import Icon from '@expo/vector-icons/Ionicons';
import CounterIcon from '@expo/vector-icons/FontAwesome5';
import { LARGE, MEDIUM, SMALL } from '../../constants/fonts';

const CartItem = (props: any) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.buttonsViewStyle}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setChecked(!checked)}
                        style={[
                            styles.checkboxStyle,
                            { backgroundColor: checked ? constants.primary : '#CCCCCC' },
                        ]}>
                        <CounterIcon name="check" size={17} color={constants.secondary} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => console.warn('deleted')}
                        style={styles.trashStyle}>
                        <CounterIcon name="trash" size={23} color={constants.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainViewStyle}>
                {/* Image */}
                <View style={styles.imageViewStyle}>
                    <Image
                        source={{
                            uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg',
                        }}
                        style={{ height: '100%', width: '100%', borderRadius: 10 }}
                    />
                </View>

                {/* Content */}

                <View style={styles.contentViewStyle}>
                    <Text numberOfLines={1} style={styles.textStyle}>
                        Product Name
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={[styles.textStyle, styles.valuesTextStyle]}>
                        Light Blue, Medium
                    </Text>

                    <Text style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 5 }}>
                        <Text style={styles.textStyle}>#5000</Text>
                        <View style={{ width: 15 }} />
                        <Icon name={'star'} color={constants.primary} />
                        <Text
                            style={[
                                styles.textStyle,
                                styles.valuesTextStyle,
                                { fontSize: SMALL },
                            ]}>
                            4.7
                        </Text>
                    </Text>
                </View>

                {/* Number of Items */}
                <View style={styles.flexStyle}>
                    <CounterIcon
                        onPress={() => {
                            console.warn('increment');
                        }}
                        name={'plus'}
                        size={15}
                        color={constants.primary}
                    />
                    <View style={styles.counterViewStyle}>
                        <Text style={{ fontSize: MEDIUM, fontWeight: 'bold' }}>5</Text>
                    </View>
                    <CounterIcon
                        onPress={() => {
                            console.warn('decrement');
                        }}
                        name={'minus'}
                        size={15}
                        color={constants.primary}
                    />
                </View>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '100%',
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: constants.secondary,
        marginTop: 30,
    },
    buttonsViewStyle: {
        height: 15,
        flexDirection: 'row',
    },
    checkboxStyle: {
        height: 25,
        width: 25,
        position: 'absolute',
        zIndex: 999,
        bottom: 2,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trashStyle: {
        position: 'absolute',
        zIndex: 999,
        bottom: 2,
    },
    mainViewStyle: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    imageViewStyle: {
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    contentViewStyle: { flex: 3, justifyContent: 'center' },
    textStyle: {
        color: constants.black,
        paddingLeft: 20,
        fontSize: LARGE,
        fontWeight: 'bold',
    },
    valuesTextStyle: {
        color: constants.primary,
        fontSize: MEDIUM,
        paddingTop: 3,
        fontWeight: '400',
    },
    counterViewStyle: {
        height: 22,
        width: 22,
        backgroundColor: '#FFFBF5',
        borderTopColor: '#FFFBF5',
        borderRightColor: '#FFFBF5',
        borderBottomColor: constants.primary,
        borderLeftColor: '#FFFBF5',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 13,
    },
    flexStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
