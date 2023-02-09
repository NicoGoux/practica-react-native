import React, { createContext, useState } from 'react';
import { getColors } from '../styles/Colors.js';
import { useColorScheme } from 'react-native';

const AppContext = createContext();

function AppProvider(props) {
    const [taskList, setTaskList] = useState([
        { text: 'Finish project report', complete: true },
        { text: 'Submit expenses', complete: false },
        { text: 'Book meeting room', complete: true },
        { text: 'Order office supplies', complete: false },
        { text: 'Update employee database', complete: true },
        { text: 'Review marketing strategy', complete: false },
        { text: 'Plan team building activity', complete: true },
        { text: 'Organize company event', complete: false },
        { text: 'Create budget plan', complete: true },
        { text: 'Develop new website', complete: false },
        { text: 'Write blog post', complete: true },
        { text: 'Publish e-book', complete: false },
        { text: 'Prepare presentation materials', complete: true },
        { text: 'Update product catalog', complete: false },
        { text: 'Develop new feature', complete: true },
        { text: 'Fix bug', complete: false },
        { text: 'Optimize website speed', complete: true },
        { text: 'Improve user experience', complete: false },
        { text: 'Design new logo', complete: true },
        { text: 'Create brand guidelines', complete: false },
    ]);

    const isDarkMode = useColorScheme() === 'dark';

    const colors = getColors(isDarkMode);

    return (
        <AppContext.Provider
            value={{ taskList, setTaskList, colors, isDarkMode }}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
