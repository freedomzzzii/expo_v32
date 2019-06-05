import {
  getItem,
  setItem,
  removeItem,
} from './Storage/Storage';

import Icons from './Icon/Icon';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import DynamicScrollView from './DynamicScrollView/DynamicScrollView';

import FontIcon from './FontIcon/FontIcon';

import Swipers from './Swiper/Swipers';

import { Input, InputPassword } from './Input/Input';

import { NormalText, BoldText, Link } from './Text/Text';

import InputCalendar from './InputCalendar/InputCalendar';

import { formatYMD, formatDMY } from './FormatDate/FormatDate';

import Picker from './Picker/Picker';

import { PrimaryButton, SecondaryButton, CustomButton } from './Button/Button';

export {
  // storage
  getItem,
  setItem,
  removeItem,
  // icon
  Icons,
  // ErrorBoundary
  ErrorBoundary,
  // DynamicScrollView
  DynamicScrollView,
  // fonticon
  FontIcon,
  // Swipers,
  Swipers,
  // imput
  Input,
  InputPassword,
  // text
  NormalText,
  BoldText,
  Link,
  // calendar
  InputCalendar,
  // format date
  formatYMD,
  formatDMY,
  // picker
  Picker,
  // button
  PrimaryButton,
  SecondaryButton,
  CustomButton,
};
