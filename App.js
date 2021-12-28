/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import CustomLoader from './components/CustomLoader';

import ScrollHeader from './components/HeaderScroll';
import ImageScroller from './components/ImageScroller';
import Test2 from './components/Test2';
import UpSwiper from './components/UpSwiper';

const App = () => {
  const [loading, setLoading] = useState(true);
  // return <ScrollHeader />;
  // return <ImageScroller />;
  // return <CustomLoader loading={loading} />;
  return <UpSwiper />;
  // return <Test2 />;
};

export default App;
