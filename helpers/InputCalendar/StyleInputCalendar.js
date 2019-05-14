import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  boxVertical: {
    maxHeight: 360,
  },
  inputBox: {
    borderWidth: 0.5,
    borderColor: Colors.borderInput,
    borderRadius: 5,
    width: '100%',
    height: 31,
    padding: 5,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    flex: 1,
    fontFamily: 'prompt',
    fontSize: 13,
    color: Colors.textInput,
  },
  calendarIcon: {
    color: Colors.textInput,
    marginLeft: 5,
  },
});
