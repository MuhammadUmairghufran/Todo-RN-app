import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Utlis from '../../utlis';
/**
 * @property {function-component} TaskItem
 * @description will receive props for task for example.
 * @returns It will return the all task that passing your through it. 
 */
export default TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={25}
                fillColor={Utlis.Colors.lighter_black}
                unfillColor={Utlis.Colors.lighter_black}
                text={props.task}
                iconStyle={styles.checkBoxIconStyle}
                textStyle={styles.checkBoxTextStyle}
            />
            <TouchableHighlight onPress={props.deleteTask} underlayColor={'none'}>
                <Image source={Utlis.Images.Delete_Task} style={styles.deleteTaskStyle} />
            </TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 8,
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    checkBoxIconStyle: {
        borderRadius: 6,
        borderWidth: 2,
        borderColor: Utlis.Colors.darker_black
    },
    checkBoxTextStyle: {
        fontFamily: "JosefinSans-Regular",
        fontSize: 18,
        color: Utlis.Colors.grey,
        fontWeight: '500',
        lineHeight: 24
    },
    deleteTaskStyle: {
        paddingTop: 10
    }

});