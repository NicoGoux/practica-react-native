import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './Context/AppContext.js';
import { HomeScreen } from './screens/HomeScreen.js';
import { TaskScreen } from './screens/TaskScreen.js';
import { TaskObject } from './model/TaskObject.js';

function Layout() {
    const { colors, isDarkMode } = useContext(AppContext);

    const styles = StyleSheet.create({
        screen: {
            height: '100%',
            width: '100%',
        },
    });

    const headerStyle = {
        title: '',
        headerStyle: {
            backgroundColor: colors.background,
        },
    };

    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={colors.background}
            />
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={headerStyle}
                />
                <Stack.Screen
                    name="Task"
                    component={TaskScreen}
                    options={headerStyle}
                    initialParams={{ task: new TaskObject(), newTask: true }}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

export { Layout };
