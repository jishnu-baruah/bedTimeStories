import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { TabNavigator } from './components/AppTabNavigator';
console.disableYellowBox = true;

export default function App() {
  return (
    <AppContainer />
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AppTabNavigator: { screen: TabNavigator }
})

const AppContainer = createAppContainer(switchNavigator);
