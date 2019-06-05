import React, { Component } from 'react';
import { View, TouchableOpacity, Modal, ScrollView, Text } from 'react-native';

import styles from './StylePicker';

import { Icons, NormalText, getItem, DynamicScrollView, Input } from '../../helpers';
import { Loading } from '../../components';

const items = [{
  value: '92iijs7yta',
  label: 'Ondo',
}, {
  value: 'a0s0a8ssbsd',
  label: 'Ogun',
}, {
  value: '16hbajsabsd',
  label: 'Calabar',
}, {
  value: 'nahs75a5sg',
  label: 'Lagos',
}, {
  value: '667atsas',
  label: 'Maiduguri',
}, {
  value: 'hsyasajs',
  label: 'Anambra',
}, {
  value: 'djsjudksjd',
  label: 'Benue',
}, {
  value: 'sdhyaysdj',
  label: 'Kaduna',
}, {
  value: 'suudydjsjd',
  label: 'Abuja',
}];

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      select: [],
      language: null,
    };
  }

  async UNSAFE_componentWillMount() {
    const language = await getItem('language');
    this.setState({ language });
  }

  handleShow = () => this.setState({ show: !this.state.show });

  handleStyleShow = () => {
    // const { show } = this.state;
    // if (show) {
    //   return { display: 'block' };
    // }
    // return { display: 'none' };
  }

  render() {
    const { select, language, show } = this.state;
    const { single, content, placeholder, label, isRequire } = this.props;
    
    if (!language) {
      return <Loading />;
    }
    return (
      <View style={styles.box}>
        {
          label ?
            <View style={styles.labelBox}>
              <NormalText style={styles.label}>{label}</NormalText>
              {isRequire ? <NormalText style={styles.require}>*</NormalText> : null}
            </View>
            : null
        }
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <TouchableOpacity onPress={this.handleShow} style={styles.textBox}>
              {
                select.length > 0 ?
                  <NormalText style={styles.text}>value</NormalText>
                  : <NormalText style={styles.placeholder}>placeholder</NormalText>
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClearValue}>
              <Icons style={styles.calendarIcon} name={!show && select.length > 0 ? 'close' : 'calendar'} size={15} />
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          transparent
          visible={show}
          
        >
          <View style={{ padding: 25,backgroundColor: 'rgba(52, 52, 52, 0.8)', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            {/* <View style={styles.pickerBox}> */}
            <View style={{backgroundColor: 'white', width: '100%', borderRadius: 10, padding: 25 }}>
              <TouchableOpacity
                style={{ alignItems: 'flex-end', marginBottom: 5 }}
                onPress={this.handleShow}
              >
                <Icons style={styles.icon} name="close" size={20} />
              </TouchableOpacity>
              <View style={{
                borderWidth: 0.5,
                borderColor: 'rgba(52, 52, 52, 0.8)',
                borderRadius: 5,
                width: '100%',
                height: 31,
                padding: 5,
              }}>
                {
                  select.length > 0 ?
                    <NormalText style={styles.text}>value</NormalText>
                    : <NormalText style={styles.placeholder}>placeholder</NormalText>
                }
              </View>
              <View style={{
                borderWidth: 0.5,
                borderColor: 'rgba(52, 52, 52, 0.8)',
                borderRadius: 5,
                width: '100%',
                height: 100,
                padding: 5,
                marginTop: 5
              }}>
                <ScrollView>
                  <Text>
                    eiei
                  </Text>
                </ScrollView>
              </View>
            </View>
            {/* <Input placeholder="Search..." />
              <View style={{ marginBottom: 5  }}>
                <DynamicScrollView>
                  <NormalText style={{fontSize: 50}}>Scroll me plz</NormalText>
                </DynamicScrollView>
              </View> */}
            {/* </View> */}
          </View>
        </Modal>

      </View>
    );
  }
}
