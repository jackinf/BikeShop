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
import { StatusBar } from 'react-native';

import SearchPage from './src/pages/searchPage';
import SingleItemPage from './src/pages/singleItemPage';

const App = () => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    {/*<SearchPage />*/}
    <SingleItemPage />
  </Fragment>
);

export default App;
