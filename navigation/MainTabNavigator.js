import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import content from './LangMainTabNavigator';

import { TabBarIcon, TabBarLabel } from '../components';
import {
  HomeScreen,
  LinksScreen,
  SettingsScreen,
} from '../screens';
import { Colors } from '../config';

const HomeStack = createStackNavigator({
  HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => <TabBarLabel color={tintColor} index="home" content={content} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="information-circle"
    />
  ),
};

const LinksStack = createStackNavigator({
  LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => <TabBarLabel color={tintColor} index="links" content={content} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="link"
    />
  ),
};

const SettingsStack = createStackNavigator({
  SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => <TabBarLabel color={tintColor} index="settings" content={content} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="options"
    />
  ),
};

export default createAppContainer(createSwitchNavigator({
  Main: createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
  }, {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      labelStyle: {
        fontSize: 9,
        fontFamily: 'prompt',
        marginTop: 5,
      },
      style: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 55,
      },
    },
  }),
}));
