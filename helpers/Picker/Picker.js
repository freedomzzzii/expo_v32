import React, { Component } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';

import styles from './StylePicker';

import { Icons, NormalText, getItem } from '../../helpers';
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
    console.log('>>>',single && this.multiSelect);

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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
        <Modal
          transparent
          visible={show}
        >
          <View style={styles.modalBox}>
            <View style={styles.calendarBox}>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={this.handleShow}>
                <Icons style={styles.calendarIcon} name="close" size={20} />
              </TouchableOpacity>
              {/* <Calendar
                hideArrows={true}
                // minDate={'2019-05-10'}
                // maxDate={'2019-05-30'}
                onDayPress={day => this.handleSelectDate(day)}
                markedDates={this.handleMarkedDates()}
                markingType={'period'}
              /> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
