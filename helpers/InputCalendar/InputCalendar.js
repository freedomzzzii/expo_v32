import React, { Component } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import styles from './StyleInputCalendar';

import { formatYMD, Icons, NormalText } from '../../helpers';
import { Colors } from '../../config';

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
    };
  }

  handleShow = () => this.setState({ show: !this.state.show });

  handleSelectDate = date => this.setState({ select: date.timestamp });

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
    const { } = this.props;
    const { show } = this.state;
    console.log('>>>', show);
    return(
      <View style={{
        width: '100%',
      }}>
        <View style={styles.inputBox}>
          <TouchableOpacity onPress={this.handleShow} style={styles.textBox}>
            <NormalText style={styles.text}>eiei</NormalText>
            <Icons style={styles.calendarIcon} name="calendar" size={15} />
          </TouchableOpacity>
        </View>
        <Modal
          // transparent
          visible={show}
        >
          <View style={{ padding: 50, flex: 1,
          justifyContent: 'center',
          alignItems: 'center', }}>
            <TouchableOpacity
              onPress={this.handleShow}>
              <Icons style={styles.calendarIcon} name="close" size={15} />
            </TouchableOpacity>
            <Calendar
              hideArrows={true}
              minDate={'2019-05-10'}
              maxDate={'2019-05-30'}
              onDayPress={day => this.handleSelectDate(day)}
              markedDates={this.handleMarkedDates()}
              markingType={'period'}
            />
          </View>
        </Modal>
      </View>
    );
    // return(
    //   // <View style={styles.boxVertical}>
    //     {/* <ScrollView> */}
    //       <CalendarList
    //         current={'2012-03-01'}
    //         // Callback which gets executed when visible months change in scroll view. Default = undefined
    //         onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
    //         // Max amount of months allowed to scroll to the past. Default = 50
    //         pastScrollRange={1}
    //         // Max amount of months allowed to scroll to the future. Default = 50
    //         futureScrollRange={1}
    //         // Enable or disable scrolling of calendar list
    //         scrollEnabled={true}
    //         // Enable or disable vertical scroll indicator. Default = false
    //         showScrollIndicator={true}
    //         // ...calendarParams
    //       />
    //     {/* </ScrollView> */}
    //   // </View>
    // );
  }
}
