import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Task({ colors, task }) {
    const styles = StyleSheet.create({
        taskContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 30,
            marginVertical: 10,
        },

        taskText: {
            fontSize: 18,
        },
    });

    return (
        <View style={styles.taskContainer}>
            {task.complete ? (
                <Ionicons
                    style={styles.taskListIcon}
                    name="radio-button-on"
                    size={25}
                    color={colors.button}
                />
            ) : (
                <Ionicons
                    style={styles.taskListIcon}
                    name="radio-button-off"
                    size={25}
                    color={colors.button}
                />
            )}
            <Text style={styles.taskText}>{task.text}</Text>
        </View>
    );
}

export { Task };
