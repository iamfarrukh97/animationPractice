import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
const {width: windowsWidth, height: windowsHeight} = Dimensions.get('window');

const StoriesProgressBar = ({
  totalStories,
  currentIndex,
  setCurrentIndex,
  currentIndexRef,
  loaderValueRef,
  loaderValue,
  setLoaderValue,
}) => {
  useEffect(() => {
    Animated.timing(loaderValueRef, {
      toValue: 100,
      duration: 5000, //update value in 5 seconds
      useNativeDriver: false,
    }).start(() => {
      console.log('in start callback', currentIndex, currentIndexRef.current);
      // if (currentIndex == +JSON.stringify(currentIndexRef)) {
      //   currentIndexRef.current = currentIndexRef.current - 1;

      //   console.log('currentIndex == currentIndexRef');
      //   loaderValueRef.setValue(0);
      // }
      if (currentIndex > currentIndexRef.current) {
        console.log('currentIndex > currentIndexRef.current');
        currentIndexRef.current = currentIndexRef.current;
        setCurrentIndex(prev => currentIndexRef.current);
        loaderValueRef.setValue(0);
        return;
      }
      if (totalStories.length - 1 === currentIndex) {
        return;
      }
      currentIndexRef.current = currentIndexRef.current + 1;
      setCurrentIndex(prev => prev + 1);
      loaderValueRef.setValue(0);
    });
    return () => {};
  }, [currentIndex, currentIndexRef]);
  // useEffect(() => {
  //   console.log(
  //     '2nd useEffect',
  //     totalStories.length,
  //     currentIndex,
  //     JSON.stringify(loaderValueRef),
  //     typeof JSON.stringify(loaderValueRef),
  //     +JSON.stringify(loaderValueRef) > 0.99,
  //   );
  //   // loaderValueRef.setValue(0);
  //   if (totalStories.length === currentIndex) {
  //     console.log('in check');
  //     clearInterval(loaderValue);
  //     return;
  //   }
  //   loaderValue = setInterval(() => setLoaderValue(old => old + 1), 1000);
  //   return () => {
  //     console.log('2nd useEffect Return');
  //     clearInterval(loaderValue); //when user exits, clear this interval.
  //   };
  // }, [currentIndex]);
  // useEffect(() => {

  //   if (count >= 100) {
  //     setCount(100);
  //     clearInterval(loaderValueRef);
  //   }
  // }, [count]);
  const width = loaderValueRef.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  return (
    <View
      style={{
        flex: 1,
        width: windowsWidth,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 100,
      }}>
      {totalStories.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              height: 2,
              width: (windowsWidth * 0.97) / totalStories.length,
              backgroundColor: 'gray',
              flexDirection: 'row',
            }}>
            {currentIndex > index ? (
              <View
                style={
                  ([StyleSheet.absoluteFill],
                  {backgroundColor: 'white', width: '100%'})
                }
              />
            ) : currentIndex === index ? (
              <Animated.View
                style={
                  ([StyleSheet.absoluteFill],
                  {backgroundColor: 'white', width: width})
                }
              />
            ) : (
              <View
                style={
                  ([StyleSheet.absoluteFill],
                  {backgroundColor: 'white', width: 0})
                }
              />
            )}
          </View>
        );
      })}
    </View>
  );
};
export default StoriesProgressBar;
