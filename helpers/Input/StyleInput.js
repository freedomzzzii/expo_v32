import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  box: {
    width: '100%',
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
  inputText: {
    borderWidth: 0.5,
    fontFamily: 'prompt',
    fontSize: 13,
    color: Colors.textInput,
    padding: 5,
    borderRadius: 5,
  },
  labelInput: {
    borderBottomWidth: 0.5,
    fontFamily: 'prompt',
    marginBottom: 15,
  },
  boxInputPassword: {
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
  },
  inputPassword: {
    flex: 1,
    fontFamily: 'prompt',
    fontSize: 13,
    color: Colors.textInput,
  },
  passwordIcon: {
    color: Colors.textInput,
    marginLeft: 5,
  },
});
