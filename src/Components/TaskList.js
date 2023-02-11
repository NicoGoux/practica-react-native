import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Task } from './Task';
import { AppContext } from '../Context/AppContext.js';

function TaskList({ navigation }) {
    const { colors, taskList } = useContext(AppContext);

    const styles = StyleSheet.create({
        listContainer: {
            flex: 1,
            width: '70%',
        },
        text: {
            width: '100%',
            textAlign: 'center',
        },
    });

    return (
        <ScrollView style={styles.listContainer}>
            {taskList.length !== 0 ? (
                taskList.map((task) => (
                    <Task
                        key={taskList.indexOf(task)}
                        colors={colors}
                        task={task}
                        navigation={navigation}
                    />
                ))
            ) : (
                <Text style={styles.text}> No existe ninguna tarea</Text>
            )}
        </ScrollView>
    );
}

export { TaskList };

// function TaskList({ colors, taskList }) {
//     const styles = StyleSheet.create({
//         listContainer: {
//             height: 20,
//         },
//     });

//     return (
//         <ScrollView style={styles.listContainer}>
//             {taskList.map((task) => (
//                 <Task
//                     key={taskList.indexOf(task)}
//                     colors={colors}
//                     task={task}
//                 />
//             ))}
//         </ScrollView>
//     );
// }

// export { TaskList };
