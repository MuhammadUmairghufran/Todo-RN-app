import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TodayDay, TodayDate } from '../../helpers/index';
import Utlis from '../../utlis';
export default function Header() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.date}>{TodayDate()}</Text>
                <Text style={styles.day}>{TodayDay()}</Text>
                <View style={styles.horizontalLine} opacity={0.2} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 166
    },
    date: {
        color: Utlis.Colors.grey,
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 15,
        marginTop: 70,
        marginLeft: 48,
        display: 'flex',
        alignItems: 'center'
    },
    day: {
        position: 'absolute',
        left: 55,
        top: 87,
        fontStyle: 'normal',
        color: Utlis.Colors.grey,
        fontSize: 32,
        lineHeight: 39,
        alignItems: 'center',
        fontWeight: 'bold'
    },
    horizontalLine: {
        position: 'absolute',
        height: 2,
        width: 335,
        left: 23,
        top: 157,
        backgroundColor: Utlis.Colors.dark_grey,
    }
});


