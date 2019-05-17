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
      <View style={{}}>

      <View style={{width: '100%', height: 50}}>
        {
          label ?
            <View style={styles.labelBox}>
              <NormalText style={styles.label}>{label}</NormalText>
              {isRequire ? <NormalText style={styles.require}>*</NormalText> : null}
            </View>
            : null
        }
        <View style={{ ...styles.inputBox, ...styles.box, flex: 1 }}>
          <View style={styles.input}>
            <TouchableOpacity onPress={this.handleShow} style={styles.textBox}>
              {
                select.length === 0 ?
                  <NormalText style={styles.text}>eiei</NormalText>
                  : <NormalText style={styles.placeholder}>{content[language][placeholder]}</NormalText>
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClearValue}>
              <Icons fontAwesome style={styles.icon} name={!show && select.length > 0 ? 'close' : 'angle-down'} size={15} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <Modal
          transparent
          visible={show}
        >
          <View style={styles.modalBox}>
            <View style={styles.pickerBox}>
              <View>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={this.handleShow}
                >
                  <Icons style={styles.icon} name="close" size={20} />
                </TouchableOpacity>
              </View>
              <Input placeholder="Search..." />
              <View style={{ marginBottom: 5  }}>
                <DynamicScrollView>
                  <NormalText style={{fontSize: 50}}>Scroll me plz</NormalText>
                </DynamicScrollView>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>

      <Modal
          transparent
          visible={true}
          
        >
          <View style={{ padding: 25,backgroundColor: 'rgba(52, 52, 52, 0.8)', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            {/* <View style={styles.pickerBox}> */}
              <View style={{backgroundColor: 'white', alignItems: 'center', width: '100%'}}>
                <TouchableOpacity
                  style={{ margin: 50 }}
                  onPress={this.handleShow}
                >
                  <Icons style={styles.icon} name="close" size={20} />
                </TouchableOpacity>
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
