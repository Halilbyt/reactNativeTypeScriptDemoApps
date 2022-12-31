import React, { FC, useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import styles from './AddTaskModal.style'
// to create a props we use interface
interface IModalProps {
    isVisiable: boolean;
    onClose: () => void;
    onAddTask: (taskContent: string) => void;
}

const AddTaskModal: FC<IModalProps> = ({ isVisiable, onClose, onAddTask }) => {
    const [inputTask, setInputTask] = useState<string>();
    function addTextHandle() {
        if (inputTask) {
            onAddTask(inputTask);
            setInputTask('');
        }
    }

    return (

        <Modal style={styles.modelContainer} isVisible={isVisiable} onBackdropPress={onClose}>
            <View style={styles.innerContainer} >
                <Text style={styles.title}>Add a task your list</Text>
                <TextInput onChangeText={(t) => setInputTask(t)} style={styles.input} value={inputTask} />
                <TouchableWithoutFeedback onPress={addTextHandle}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonPlaceholder}> Add the Task </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )



}

export default AddTaskModal;