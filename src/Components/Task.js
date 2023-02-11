import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../Context/AppContext';

function Task({ task, navigation }) {
    const { taskList, setTaskList, colors } = useContext(AppContext);

    const [complete, setComplete] = useState(task.complete);

    useEffect(() => {
        task.complete = complete;
        setTaskList([...taskList]);
    }, [complete]);

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
        <TouchableHighlight
            onPress={() => {
                navigation.navigate('Task', { task: task, newTask: false });
            }}>
            <View style={styles.taskContainer}>
                {complete ? (
                    <TouchableHighlight
                        onPress={() => {
                            setComplete(false);
                        }}>
                        <Ionicons
                            style={styles.taskListIcon}
                            name="checkmark"
                            size={25}
                            color={colors.button}
                        />
                    </TouchableHighlight>
                ) : (
                    <TouchableHighlight
                        onPress={() => {
                            setComplete(true);
                        }}>
                        <Ionicons
                            style={styles.taskListIcon}
                            name="remove"
                            size={25}
                            color={colors.button}
                        />
                    </TouchableHighlight>
                )}
                <Text style={styles.taskText}>{task.title}</Text>
            </View>
        </TouchableHighlight>
    );
}

export { Task };
