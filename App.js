/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AnimateNavigator from './components/Navigator/AnimationStack';

const App = ({}) => {
  return (
    <NavigationContainer>
      <AnimateNavigator />
    </NavigationContainer>
  );
};

export default App;
