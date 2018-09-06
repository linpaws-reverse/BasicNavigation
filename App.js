import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RootStack from './RootStack'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
