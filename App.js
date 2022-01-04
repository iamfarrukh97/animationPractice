/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AnimateNavigator from './components/Navigator/AnimationStack';
import {View, Animated, StyleSheet, Image} from 'react-native';
import {Stories, Stories2} from './InstaStory/components';
const stories = [
  {
    id: 5,
    source: require('./components/assets/StoriesAssets/story10.jpeg'),
    user: 'Itachi Uchiha',
    avatar: require('./components/assets/StoriesAssets/user4.jpeg'),
  },
  {
    id: 6,
    source: require('./components/assets/StoriesAssets/story11.jpeg'),
    user: 'Itachi Uchiha',
    avatar: require('./components/assets/StoriesAssets/user1.png'),
  },
  {
    id: 1,
    source: require('./components/assets/StoriesAssets/story6.jpeg'),
    user: 'Itachi Uchiha',
    avatar: require('./components/assets/StoriesAssets/user2.jpg'),
  },
  {
    id: 2,
    source: require('./components/assets/StoriesAssets/story7.jpeg'),
    user: 'Itachi Uchiha',
    avatar: require('./components/assets/StoriesAssets/user4.jpeg'),
  },
  {
    id: 3,
    source: require('./components/assets/StoriesAssets/story8.jpeg'),
    user: 'Itachi Uchiha',
    avatar: require('./components/assets/StoriesAssets/user3.jpeg'),
  },
  {
    id: 4,
    source: require('./components/assets/StoriesAssets/story9.jpeg'),
    user: 'Itachi Uchiha',
    avatar: require('./components/assets/StoriesAssets/user4.jpeg'),
  },
];

const App = () => {
  // return (
  //   <NavigationContainer>
  //     <AnimateNavigator />
  //   </NavigationContainer>
  // );
  return (
    <React.Fragment>
      <Stories stories={stories} />
    </React.Fragment>
  );
};

export default App;
