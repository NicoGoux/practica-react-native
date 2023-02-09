import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
} from 'react-native';
import { TaskList } from '../src/Components/TaskList.js';
import { Toolbar } from '../src/Components/Toolbar.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AppContext } from '../src/Context/AppContext.js';

function Home() {
    const { colors, taskList } = useContext(AppContext);

    const styles = StyleSheet.create({
        container: {
            flex: 5,
            width: '100%',
            paddingBottom: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.background,
            gap: 30,
        },

        textContainer: {
            width: '60%',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 50,
        },

        title: {
            color: colors.headline,
            fontSize: 28,
        },

        taskCount: {
            color: colors.paragraph,
        },

        taskListIcon: {
            marginTop: 6,
        },

        addButton: {
            position: 'absolute',
            bottom: 20,
            right: 20,
            backgroundColor: colors.button,
            color: colors.buttonText,
            padding: 15,
            borderRadius: 20,
        },
    });

    return (
        <>
            <Toolbar colors={colors} />
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <FontAwesome5
                        style={styles.taskListIcon}
                        name="tasks"
                        size={25}
                        color={colors.button}
                    />
                    <View>
                        <Text style={styles.title}>Tareas</Text>
                        <Text style={styles.taskCount}>
                            {taskList.length} tasks
                        </Text>
                    </View>
                </View>
                <TaskList colors={colors} taskList={taskList} />

                <TouchableHighlight
                    style={styles.addButton}
                    onPress={() => Alert.alert('Add task')}>
                    <FontAwesome5
                        name="plus"
                        size={25}
                        color={colors.headline}
                    />
                </TouchableHighlight>
            </View>
        </>
    );
}

export { Home };
