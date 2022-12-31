import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from 'react-native';
import Colors from './styles/Colors';
import Fonts from './styles/Fonts';
import FloatingButton from './components/floatingButton/FloatingButton';
import AddTaskModal from './components/AddTaskModal';
import { useState } from 'react';
import TaskCard from './components/TaskCard';

const App = () => {

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<any>([]);

  function modelVisibleHandler() {
    setModalVisible(!modalVisible);
  }

  function addTask(taskContent: string) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const doublicateTask = todoList.find((task: any) => task.task.trim().toLowerCase() === taskContentCheck)

    if (taskContentCheck.length === 0 || taskContentCheck === '' || taskContentCheck === undefined || taskContentCheck === null) {
      Alert.alert('Task is Empy!', 'Task area cannot be empy', [{ text: 'Cancel', style: 'cancel' }, { text: 'Ok', style: 'destructive' }])
    } else {
      if (doublicateTask) {
        Alert.alert('Task Doublicated!', 'The task you entered is already exist', [{ text: 'Cancel', style: 'cancel' }, { text: 'Ok', style: 'destructive' }])
      } else {
        const newTask = {
          id: todoList.length + 1,
          task: taskContent,
          isCompleted: false,
        }

        setTodoList((oldTask: any) => [...oldTask, newTask])
        setModalVisible(false);
      }
    }
  }

  function deleteHandler(task: any) {
    if (task.isComplated === false) {
      console.log('hello-1')
      const updatedList = todoList.map((item: any) => {
        if (item.id === task.id) {
          item.isComplated = true;
        }
        return item;

      });
      setTodoList(updatedList);

    } else {
      console.log('hello-2');
      setTodoList(todoList.filter((item: any) => item.id !== task.id));

    }

  }


  function flatListRenderHandler(items: any) {
    return <TaskCard onDelete={() => deleteHandler(items.item)} tasks={items.item.task} isComplated={items.item.isComplated} />
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>
        My To Do List
      </Text>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={flatListRenderHandler}
      />
      <FloatingButton onPress={modelVisibleHandler}></FloatingButton>
      <AddTaskModal onAddTask={addTask} onClose={modelVisibleHandler} isVisiable={modalVisible}></AddTaskModal>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.defaultDarkColor,

  },
  title: {
    fontSize: 24,
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    padding: 10,
    marginBotton: 10,
  }

});

export default App;
'cd android && ./gradlew clean ///=> to clear gradlew '