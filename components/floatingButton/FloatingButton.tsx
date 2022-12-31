import React, { FC } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './FloatingButton.style'

interface IButttonPress {
    onPress: () => void;
}

const FloatingButton: FC<IButttonPress> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.icon}>+</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FloatingButton;