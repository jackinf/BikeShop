/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import { YellowBox } from 'react-native';
import SearchPage from './src/pages/searchPage';
import SingleItemPage from './src/pages/singleItemPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

const routeConfigMap = {
  Home: SearchPage,
  Details: SingleItemPage,
};
const AppNavigator = createStackNavigator(routeConfigMap, {
  initialRouteName: 'Home',
  headerMode: 'none'
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}