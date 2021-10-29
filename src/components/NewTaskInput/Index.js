import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Image, TouchableHighlight } from "react-native";
import Utlis from '../../utlis/index';

/**
 * @param {function} addTask @param {string} searchInputPlaceholder
 * @description TaskItem will receive props for task for example.
 * @returns It will return the all task that passing your through it. 
 */
export default NewTaskInput = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <TextInput
                style={styles.inputField} value={task}
                onChangeText={text => setTask(text)}
                placeholder={props.searchInputPlaceholder}
                placeholderTextColor={Utlis.Colors.grey} />
            <TouchableHighlight
                onPress={() => handleAddTask(task)}
                underlayColor={'none'}>
                <Image
                    source={Utlis.Images.Add_Task} style={{ left: 20 }}
                />
            </TouchableHighlight>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Utlis.Colors.white,
        marginHorizontal: 20,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginTop: 20,
        paddingLeft: 20,
    },
    inputField: {
        color: Utlis.Colors.black,
        height: 50,
        flex: 1,
        fontSize: 16
    },
    add_taskIcon: {
        left: 20
    }
});