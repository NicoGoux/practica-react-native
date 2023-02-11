import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TextInput,
    View,
    Alert,
} from 'react-native';
import { AppContext, showConfirmDialog } from '../Context/AppContext.js';
import { TaskObject } from '../model/TaskObject.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function TaskScreen({ route, navigation }) {
    const { task, newTask } = route.params;

    const { colors, taskList, setTaskList } = useContext(AppContext);

    const [title, setTitle] = useState(task.title);

    const [description, setDescription] = useState(task.description);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            paddingTop: 60,
            paddingBottom: 100,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: colors.background,
            gap: 30,
        },

        textContainer: {
            width: '70%',
            paddingBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors.button,
        },

        title: {
            width: 240,
            color: colors.headline,
            fontSize: 24,
        },

        headerButton: {
            padding: 5,
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
        },

        description: {
            width: '70%',
        },

        bottomButton: {
            position: 'absolute',
            bottom: 20,
            right: 20,
            backgroundColor: colors.button,
            color: colors.buttonText,
            padding: 15,
            borderRadius: 20,
        },
    });

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={() => {
                        showConfirmDialog(
                            '¿Deseas eliminar la tarea?',
                            `Si confirma, se eliminara la tarea ${route.params.task.title}`,
                            () => {
                                const newTaskList = taskList.filter(
                                    (taskInList) =>
                                        taskInList.title !== task.title,
                                );
                                setTaskList(newTaskList);
                                navigation.navigate('Home');
                            },
                        );
                    }}>
                    <AntDesign name="delete" size={30} color={colors.button} />
                </TouchableHighlight>
            ),
            headerRight: () => (
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={() => {
                        if (
                            taskList.some(
                                (taskInList) => taskInList.title === title,
                            )
                        ) {
                            Alert.alert(
                                'El titulo indicado ya se encuentra utilizado',
                            );

                            return;
                        }
                        if (newTask) {
                            setTaskList([
                                ...taskList,
                                new TaskObject(title, description, false),
                            ]);
                        } else {
                            task.title = title;
                            task.description = description;
                            setTaskList([...taskList]);
                        }

                        navigation.navigate('Home');
                    }}>
                    <AntDesign name="check" size={30} color={colors.button} />
                </TouchableHighlight>
            ),
        });
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    {task.complete ? (
                        <Ionicons
                            style={styles.taskListIcon}
                            name="checkmark"
                            size={30}
                            color={colors.button}
                        />
                    ) : (
                        <Ionicons
                            style={styles.taskListIcon}
                            name="remove"
                            size={30}
                            color={colors.button}
                        />
                    )}
                    <TextInput
                        style={styles.title}
                        defaultValue={task.title}
                        maxLength={30}
                        multiline={true}
                        onChangeText={(text) => {
                            setTitle(text);
                        }}
                    />
                </View>
                <TextInput
                    style={styles.description}
                    defaultValue={
                        task.description !== ''
                            ? task.description
                            : 'descripción'
                    }
                    maxLength={300}
                    multiline={true}
                    autoFocus={true}
                    onChangeText={(text) => {
                        setDescription(text);
                    }}
                />
            </View>
        </>
    );
}

export { TaskScreen };
