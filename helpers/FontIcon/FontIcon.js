import React from 'react';
import { createIconSet } from '@expo/vector-icons';

import styles from './StyleFontIcon';

import configIcon from './configFontIcon.json';
const CustomIcon = createIconSet({ ...configIcon }, 'font-icon');

// req name size color
export default props => <CustomIcon style={styles.icon} {...props} />;
