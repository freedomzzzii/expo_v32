import { AsyncStorage } from 'react-native';

const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch(exception) {
    return false;
  }
};

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch(exception) {
    return false;
  }
};

const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch(exception) {
    return undefined;
  }
};

export {
  getItem,
  setItem,
  removeItem,
};
