import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    AppContext,
    AppProvider,
    isDarkMode,
} from './src/Context/AppContext.js';
import { Home } from './screens/Home.js';

function App() {
    const styles = StyleSheet.create({
        screen: {
            height: '100%',
            width: '100%',
        },
    });

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <AppProvider>
                <SafeAreaView style={styles.screen}>
                    <AppContext.Consumer>
                        {({ colors, isDarkMode }) => (
                            <StatusBar
                                barStyle={
                                    isDarkMode
                                        ? 'light-content'
                                        : 'dark-content'
                                }
                                backgroundColor={colors.background}
                            />
                        )}
                    </AppContext.Consumer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </SafeAreaView>
            </AppProvider>
        </NavigationContainer>
    );
}

export { App };
