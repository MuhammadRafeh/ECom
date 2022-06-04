import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

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
        overflow: 'hidden'
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.7
    },
    title: {
        fontSize: 18,
        fontFamily: '1',
        letterSpacing: 0.4,
        top: 2,
        color: '#fff',
        transform: [
            { rotate: '-0.5deg' }
        ]
    }
})
