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
import { createAppContainer } from 'react-navigation';
// @ts-ignore - there are currently no type definitions for this library
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SearchPage from './src/pages/searchPage';
import DetailsPage from './src/pages/detailsPage';
import CartPage from './src/pages/cartPage';
import AccountPage from './src/pages/accountPage';
import { PAGES } from './src/pages/constants';
import FooterTabs from './src/components/FooterTabs';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Remote debugger'
]);

const searchPageRouteConfig = {
  [PAGES.SEARCH]: { screen: SearchPage },
  [PAGES.DETAILS]: { screen: DetailsPage },
};
const AppNavigator = createStackNavigator(searchPageRouteConfig, {
  initialRouteName: PAGES.SEARCH,
  headerMode: 'none'
});

const routeConfigMap = {
  [PAGES.HOME]: { screen: AppNavigator },
  [PAGES.CART]: { screen: CartPage },
  [PAGES.ACCOUNT]: { screen: AccountPage },
};


// noinspection JSUnusedGlobalSymbols - there are currently no type definitions for this library
const BottomTabNavigation = createBottomTabNavigator(routeConfigMap, {
  initialRouteName: PAGES.HOME,
  tabBarComponent: (props: any) => {
    const { routes, index } = props.navigation.state;
    const selectedPage = routes[index].routeName;
    return (
      <FooterTabs navigation={props.navigation} selectedRouteName={selectedPage} />
    );
  },
});
const AppContainer = createAppContainer(BottomTabNavigation);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
