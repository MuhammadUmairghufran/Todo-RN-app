import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TaskItem from '../TaskItem/index';
import Utlis from '../../utlis';

export default function TaskList(props) {
    return (
        <>
            <View style={styles.container} >
                <View style={styles.wraperContainer} />
                <Text style={styles.titleTextStyle}>All Tasks</Text>
                <FlatList
                    data={props.tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TaskItem
                                index={index + 1}
                                task={item}
                                deleteTask={() => props.deleteTask(index)} />
                        )
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 364
    },
    wraperContainer: {
        paddingTop: 50
    },
    titleTextStyle: {
        position: 'absolute',
        fontSize: 18,
        lineHeight: 18,
        fontWeight: 'bold',
        fontFamily: "Inter",
        left: 20,
        top: 25,
        color: Utlis.Colors.white,

    }

});