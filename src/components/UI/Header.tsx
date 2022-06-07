import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import constants from '../../constants/constants';
import { EXTRA_LARGE } from '../../constants/fonts';
import Icon from '@expo/vector-icons/FontAwesome5';

const Header = (props: any) => {
    const backgroundColor = props.backgroundColor
        ? props.backgroundColor
        : constants.primary;
    const alignItems = props.alignItems ? props.alignItems : 'center';

    const { iconColor, titleColor, title, headerBgColor } = props;
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: headerBgColor ? headerBgColor : 'transparent' },
            ]}>
            <View style={[styles.viewStyle1, { alignItems: 'flex-end' }]}>
                <Ripple
                    rippleCentered={true}
                    rippleContainerBorderRadius={50}
                    style={styles.rippleStyle}>
                    <Icon
                        name={'chevron-left'}
                        size={20}
                        color={iconColor ? iconColor : constants.black}
                    />
                </Ripple>
            </View>
            <View style={[styles.viewStyle2, { flex: 3, alignItems }]}>
                <Text
                    style={{
                        fontSize: EXTRA_LARGE,
                        fontWeight: 'bold',
                        color: titleColor ? titleColor : constants.black,
                    }}>
                    {title}
                </Text>
            </View>
            <View style={{ width: 50 }} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },

    viewStyle1: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
    },
    viewStyle2: {
        flex: 1,
        justifyContent: 'center',
    },
    rippleStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
