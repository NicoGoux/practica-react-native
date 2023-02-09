import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Task } from './Task';

function TaskList({ colors, taskList }) {
    const styles = StyleSheet.create({
        listContainer: {
            flex: 1,
            width: '60%',
        },
    });

    return (
        <ScrollView style={styles.listContainer}>
            {taskList.map((task) => (
                <Task
                    key={taskList.indexOf(task)}
                    colors={colors}
                    task={task}
                />
            ))}
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
