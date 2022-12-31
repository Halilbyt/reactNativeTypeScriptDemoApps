import React, { FC } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './TaskCard.style'

interface ICardProps {
    isComplated: boolean;
    tasks: string;
    onDelete: () => void;
}

const TaskCard: FC<ICardProps> = ({ isComplated, tasks, onDelete }) => {
    return (
        isComplated ?
            <TouchableWithoutFeedback onLongPress={onDelete}>
                <View style={styles.complatedContainer}>
                    <Text style={styles.complatedText}>
                        {tasks}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            :
            <TouchableWithoutFeedback onLongPress={onDelete}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {tasks}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
    )
}

export default TaskCard;