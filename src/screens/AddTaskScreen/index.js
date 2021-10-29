import React, { useState } from 'react';
import { Dimensions, ImageBackground, Keyboard, StyleSheet, FlatList, Text, View } from 'react-native';
import Utlis from '../../utlis/index';
import Header from '../../components/Header/index';
import AddTask from '../../components/AddTask/index';
import TaskList from '../../components/TaskList';
export default function AddTaskScreen() {
    const [tasks, setTasks] = useState([]);

    /**
    * @description search claim gym criteria by user status.
    * @property {object} activeUser- user detail search parameters.
    * @returns {object} Success/Error Message.
    */
    const addTask = (_text) => {
        if (_text == null) return;
        setTasks([...tasks, _text]);
        Keyboard.dismiss();
    }


    /**
     * @description search claim gym criteria by user status.
     * @property {object} activeUser- user detail search parameters.
     * @returns {object} Success/Error Message.
     */
    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={Utlis.Images.AddTaskScreen_Background} style={styles.image}>
                <Header />
                <AddTask addTask={addTask} />
                <TaskList tasks={tasks} deleteTask={deleteTask} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: Dimensions.get('screen').height,
        flex: 1,
    }
});


