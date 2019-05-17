import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  box: {
    width: '100%',
    marginBottom: 5,
  },
  require: {
    color: Colors.red,
    paddingLeft: 3,
  },
  labelBox: {
    fontSize: 13,
    marginBottom: 3,
    flexDirection: 'row',
  },
  label: {
    fontSize: 13,
    color: Colors.textInput,
  },
  inputBox: {
    borderWidth: 0.5,
    borderColor: Colors.borderInput,
    borderRadius: 5,
    width: '100%',
    height: 31,
    padding: 5,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontFamily: 'prompt',
    fontSize: 13,
    color: Colors.textInput,
  },
  placeholder: {
    fontFamily: 'prompt',
    fontSize: 13,
    color: Colors.placeholder,
  },
  icon: {
    color: Colors.textInput,
    marginLeft: 5,
  },
  modalBox: {
    padding: 25,
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.bgModalCalendar,
  },
  pickerBox: {
    backgroundColor: Colors.white,
    padding: 25,
    borderRadius: 10,
    maxHeight: '50%',
    // height: '100%',
    // flex: 1,
  },
  closeBtn: {
    width: 'auto',
    // width: '100%',
    alignItems: 'flex-end',
    marginBottom: 5,
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // alignSelf: 'flex-sta',
  },
});
