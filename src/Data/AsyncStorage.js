import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
    }
};

const getTaskList = async (setTaskList, setLoading) => {
    try {
        const jsonValue = await AsyncStorage.getItem('tasklist');
        const storageTaskList = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTaskList(storageTaskList);
        setLoading(false);
    } catch (e) {
        // error reading value
    }
};

export { storeData, getTaskList, logData };
