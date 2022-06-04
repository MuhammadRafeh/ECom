import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import constants from '../../constants/constants';

type buttonProps = {
    title: string;
    onPress: () => void;
    style?: object;
}

const Button: React.FC<buttonProps> = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <>
                <Text style={styles.title}>{title}</Text>
            </>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: constants.primary
    },
    title: {
        fontSize: 18,
        letterSpacing: 0.4,
        top: 2,
        color: '#fff',
        transform: [
            { rotate: '-0.5deg' }
        ],
    }
})
