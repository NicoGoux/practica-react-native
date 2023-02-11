import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from './Context/AppContext.js';

import { Layout } from './Layout.js';

function App() {
    return (
        <NavigationContainer>
            <AppProvider>
                <Layout />
            </AppProvider>
        </NavigationContainer>
    );
}

export { App };
