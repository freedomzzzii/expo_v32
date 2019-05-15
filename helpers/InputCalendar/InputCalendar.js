import React, { Component } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import PropTypes from 'prop-types';

import styles from './StyleInputCalendar';

import {
  formatYMD,
  Icons,
  NormalText,
  getItem,
  formatDMY,
} from '../../helpers';
import { Colors } from '../../config';
import { Loading } from '../../components';

LocaleConfig.locales['th'] = {
  monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  monthNamesShort: ['ม.ค.', 'ก.พ.', 'ม.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย', 'ธ.ค.'],
  dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
  dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
};

LocaleConfig.defaultLocale = 'th';

export default class InputCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null,
      show: false,
      language: null,
    };
  }

  async UNSAFE_componentWillMount() {
    const language = await getItem('language');
    this.setState({ language });
  }

  handleShow = () => this.setState({ show: !this.state.show });

  handleSelectDate = date => this.setState({ select: date.timestamp, show: false });

  handleMarkedDates = () => {
    const { select } = this.state;
    if (!select) {
      return {};
    }
    return {
      [formatYMD(select)]: {
        disabled: true,
        startingDay: true,
        color: Colors.selectCalendar,
        textColor: Colors.white,
        endingDay: true,
      },
    };
  }

  handleStyleShow = () => {
    const { show } = this.state;
    if (show) {
      return { display: 'block' };
    }
    return { display: 'none' };
  }

  render() {
    const { show, select, language } = this.state;
    const { content, placeholder } = this.props;
    
    if (!language) {
      return <Loading />;
    }
    
    return(
      <View style={styles.box}>
        <View style={styles.inputBox}>
          <TouchableOpacity onPress={this.handleShow} style={styles.textBox}>
            {
              select ?
                <NormalText style={styles.text}>{formatDMY(select)}</NormalText>
                : <NormalText style={styles.placeholder}>{content[language][placeholder]}</NormalText>
            }
            <Icons style={styles.calendarIcon} name="calendar" size={15} />
          </TouchableOpacity>
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
              <Calendar
                hideArrows={true}
                // minDate={'2019-05-10'}
                // maxDate={'2019-05-30'}
                onDayPress={day => this.handleSelectDate(day)}
                markedDates={this.handleMarkedDates()}
                markingType={'period'}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

InputCalendar.propTypes = {
  content: PropTypes.shape({
    th: PropTypes.shape({}).isRequired,
    en: PropTypes.shape({}).isRequired,
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
};
