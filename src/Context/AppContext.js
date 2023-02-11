import React, { createContext, useState, useEffect } from 'react';
import { getColors } from '../styles/Colors.js';
import { useColorScheme, Alert } from 'react-native';
import { getTaskList, logData, storeData } from '../Data/AsyncStorage.js';

const AppContext = createContext();

function AppProvider(props) {
    const [taskList, setTaskList] = useState([]);

    const [loading, setLoading] = useState(true);

    const isDarkMode = useColorScheme() === 'dark';

    const colors = getColors(isDarkMode);

    useEffect(() => {
        getTaskList(setTaskList, setLoading);
    }, []);

    useEffect(() => {
        storeData('tasklist', taskList);
    }, [taskList]);

    return (
        <AppContext.Provider
            value={{ loading, taskList, setTaskList, colors, isDarkMode }}>
            {props.children}
        </AppContext.Provider>
    );
}

function showConfirmDialog(title, text, action) {
    return Alert.alert(title, text ? text : '', [
        { text: 'Si', onPress: action },
        { text: 'No' },
    ]);
}
export { AppContext, AppProvider, showConfirmDialog };
