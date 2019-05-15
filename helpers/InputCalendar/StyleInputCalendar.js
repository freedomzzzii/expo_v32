import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  box: {
    width: '100%',
  },
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
  placeholder: {
    flex: 1,
    fontFamily: 'prompt',
    fontSize: 13,
    color: Colors.placeholder,
  },
  calendarIcon: {
    color: Colors.textInput,
    marginLeft: 5,
  },
  modalBox: {
    padding: 25,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.bgModalCalendar,
  },
  calendarBox: {
    backgroundColor: Colors.white,
    padding: 25,
    borderRadius: 10,
  },
  closeBtn: {
    width: '100%',
    alignItems: 'flex-end',
  },
});
