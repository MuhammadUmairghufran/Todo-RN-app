import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewTaskInput from '../NewTaskInput/Index';
import Utlis from '../../utlis';
export default function AddTask(props) {
    return (
        <>
            <View style={styles.container}>
                <NewTaskInput
                    addTask={props.addTask}
                    searchInputPlaceholder={Utlis.Strings.searchInputText}
                />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 76
    },
});


