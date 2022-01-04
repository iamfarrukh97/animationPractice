import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  Animated,
  ScrollView,
  View,
  Text,
  Easing,
  Button,
  StyleSheet,
} from 'react-native';
LOADER_MAX_SIZE = 220;
LOADER_MIN_SIZE = 120;

const CustomLoader = () => {
  const loading = true;
  const animatedValue = useState(new Animated.Value(0))[0];
  // React.useEffect(() => {
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(animatedValue, {
  //         toValue: 1,
  //         duration: 500,
  //         //   delay: 1000,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(animatedValue, {
  //         toValue: 0,
  //         duration: 500,
  //         useNativeDriver: true,
  //       }),
  //     ]),
  //   ).start();
  // }, []);

  const startAnimate = () => {
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(animatedValue, {
    //       toValue: 1,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //     Animated.timing(animatedValue, {
    //       toValue: 0,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //   ]),
    // ).start();
    // if (animatedValue === 1) {
    //   Animated.timing(animatedValue, {
    //     toValue: 0,
    //     duration: 1000,
    //     //   easing: Easing.ease,
    //     useNativeDriver: false,
    //   }).start();
    //   return;
    // }
    // Animated.timing(animatedValue, {
    //   toValue: 0,
    //   duration: 1000,
    //   //   easing: Easing.ease,
    //   useNativeDriver: false,
    // }).start();
  };
  // useEffect(() => {
  //   startAnimate();
  // }, []);
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]),
  ).start();
  const loaderSize = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [LOADER_MAX_SIZE, LOADER_MIN_SIZE],
  });
  const loaderBreath = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
  });
  const textSize = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [14, 8],
  });
  return (
    <>
      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFill,
            flex: 1,
            // position: 'absolute',
            // top: 0,
            // bottom: 0,
            // left: 0,
            // right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            // width: '100%',
            // height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              height: loaderSize,
              width: loaderSize,
              borderWidth: LOADER_MAX_SIZE / 10,
              borderRadius: LOADER_MAX_SIZE / 2,
              borderColor: 'white',
              shadowColor: 'white',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: loaderBreath,
              justifyContent: 'center',
              alignItems: 'center',
              // transform: [
              //   {
              //     scale: animatedValue.interpolate({
              //       inputRange: [0, 100],
              //       outputRange: [LOADER_MAX_SIZE, LOADER_MIN_SIZE], // 0 : 150, 0.5 : 75, 1 : 0
              //     }),
              //   },
              // ],
              shadowRadius: 10,
            }}>
            <Animated.Text style={{color: 'white', fontSize: 16}}>
              Loading...
            </Animated.Text>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default CustomLoader;
