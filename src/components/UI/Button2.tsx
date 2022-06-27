import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import constants from '../../constants/constants';
import { MEDIUM } from '../../constants/fonts';

type button2Props = {
    height?: number | string;
    width?: number | string;
    backgroundColor?: string;
    borderRadius?: number | string;
    onPress?: () => void;
    btnTextSize?: number | string;
    btnFontWeight?: number | string;
    btnTextColor?: string;
    buttonText: string;
}

const Button2: React.FC<button2Props> = (props: any) => {
    const height = props.height ? props.height : 50;
    const width = props.width ? props.width : '100%';
    const backgroundColor = props.backgroundColor
        ? props.backgroundColor
        : constants.primary;
    const borderRadius = props.borderRadius ? props.borderRadius : 5;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={props.onPress}
                style={[
                    styles.buttonStyle,
                    {
                        height,
                        width,
                        backgroundColor,
                        borderRadius,
                    },
                ]}>
                <Text
                    style={{
                        fontSize: props.btnTextSize ? props.btnTextSize : MEDIUM,
                        fontWeight: props.btnFontWeight ? props.btnFontWeight : '500',
                        color: props.btnTextColor ? props.btnTextColor : constants.secondary,
                    }}>
                    {props.buttonText ? props.buttonText : ''}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button2;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
