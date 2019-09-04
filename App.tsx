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
import DetailsPage from './src/pages/detailsPage';
import CartPage from './src/pages/cartPage';
import AccountPage from './src/pages/accountPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PAGES } from './src/pages/constants';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

const routeConfigMap = {
  [PAGES.HOME]: SearchPage,
  [PAGES.DETAILS]: DetailsPage,
  [PAGES.CART]: CartPage,
  [PAGES.ACCOUNT]: AccountPage,
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