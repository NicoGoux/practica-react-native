import React from 'react';
import { View, StyleSheet, Alert, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Toolbar({ colors }) {
    const styles = StyleSheet.create({
        toolbarContainer: {
            backgroundColor: colors.background,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
        },
        button: {
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
        },
    });

    return (
        <View style={styles.toolbarContainer}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => Alert.alert('back')}>
                <AntDesign name="left" size={30} color={colors.button} />
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.button}
                onPress={() => Alert.alert('setting')}>
                <AntDesign name="setting" size={30} color={colors.button} />
            </TouchableHighlight>
        </View>
    );
}

export { Toolbar };
