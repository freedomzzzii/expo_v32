import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { MainTab } from '..';

export default createAppContainer(createSwitchNavigator({
  Main: MainTab,
}));