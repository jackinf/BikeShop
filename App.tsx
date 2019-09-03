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
import { YellowBox, StatusBar } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Item, Icon, Input } from 'native-base';
import SearchPage from './src/pages/searchPage';
import SingleItemPage from './src/pages/singleItemPage';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

const App = () => <SearchPage />;

export default App;
