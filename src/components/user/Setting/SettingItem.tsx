import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import ChevronRightIcon from '../Assets/icons/chevronRight.svg';
import constants from '../../../constants/constants';
import { EXTRA_LARGE, MEDIUM } from '../../../constants/fonts';

const SettingItem = (props: any) => {
    const height = props.height ? props.height : 70;
    const width = props.width ? props.width : '85%';

    const { Element, title, numOfAlerts, changeLang, hideArrowNext, langName } =
        props;

    return (
        <Ripple style={[styles.container, { height, width }]}>
            <View style={styles.flexStyle2}>
                <View style={styles.iconViewStyle}>{Element(props)}</View>
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
            {numOfAlerts && (
                <View style={styles.countViewStyle}>
                    <Text style={styles.countTextStyle}>{numOfAlerts}</Text>
                </View>
            )}
            {changeLang && (
                <View style={styles.langViewStyle}>
                    <Text style={styles.langTextStyle}>{langName}</Text>
                </View>
            )}
            {hideArrowNext ? (
                false
            ) : (
                <View style={[styles.flexStyle1, { alignItems: 'flex-end' }]}>
                    <ChevronRightIcon />
                </View>
            )}
        </Ripple>
    );
};

export default SettingItem;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: constants.secondary,
        flexDirection: 'row',
        borderWidth: 1,
        borderTopColor: constants.secondary,
        borderRightColor: constants.secondary,
        borderBottomColor: constants.primary,
        borderLeftColor: constants.secondary,
    },
    flexStyle1: {
        width: 30,
        justifyContent: 'center',
    },
    flexStyle2: {
        width: 50,
        justifyContent: 'center',
    },
    iconViewStyle: {
        height: 30,
        width: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF3E4',
    },
    textStyle: { color: '#7D6868', fontWeight: '300', fontSize: 16 },
    countViewStyle: {
        height: 35,
        width: 35,
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF3E4',
    },
    countTextStyle: {
        fontSize: EXTRA_LARGE,
        fontWeight: 'bold',
        color: constants.primary,
    },
    langViewStyle: {
        height: 35,
        width: 'auto',
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF3E4',
    },
    langTextStyle: {
        fontSize: MEDIUM,
        fontWeight: '300',
        color: '#7D6868',
        paddingRight: 12,
        paddingLeft: 12,
    },
});
