import React, { useContext, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    BackHandler,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { TaskList } from '../Components/TaskList.js';
import { AppContext, showConfirmDialog } from '../Context/AppContext.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HomeScreen({ navigation }) {
    const { colors, loading, taskList } = useContext(AppContext);

    const styles = StyleSheet.create({
        container: {
            flex: 5,
            width: '100%',
            paddingTop: 60,
            paddingBottom: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.background,
            gap: 30,
        },

        textContainer: {
            width: '70%',
            paddingBottom: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 50,
            borderBottomWidth: 1,
            borderBottomColor: colors.button,
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

        headerButton: {
            padding: 5,
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
        },
    });

    //El use effect es para evitar un warning de modificacion del NativeStackNavigator al renderizar la pantalla
    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerStyle: {
                backgroundColor: colors.background,
            },
            headerLeft: () => (
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={() => {
                        showConfirmDialog(
                            '¿Deseas salir de la aplicación?',
                            null,
                            () => {
                                BackHandler.exitApp();
                            },
                        );
                    }}>
                    <AntDesign name="left" size={30} color={colors.button} />
                </TouchableHighlight>
            ),
            headerRight: () => (
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={() => Alert.alert('setting')}>
                    <AntDesign name="setting" size={30} color={colors.button} />
                </TouchableHighlight>
            ),
        });
    });

    return (
        <>
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
                        {loading === false && (
                            <Text style={styles.taskCount}>
                                {taskList.length} tasks
                            </Text>
                        )}
                    </View>
                </View>
                {loading === true ? (
                    <ActivityIndicator
                        style={{ flex: 1 }}
                        size="large"
                        color={colors.button}
                    />
                ) : (
                    <>
                        <TaskList
                            colors={colors}
                            taskList={taskList}
                            navigation={navigation}
                        />

                        <TouchableHighlight
                            style={styles.addButton}
                            onPress={() => navigation.navigate('Task')}>
                            <FontAwesome5
                                name="plus"
                                size={25}
                                color={colors.headline}
                            />
                        </TouchableHighlight>
                    </>
                )}
            </View>
        </>
    );
}

export { HomeScreen };
