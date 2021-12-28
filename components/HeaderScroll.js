import React, {useState, useRef} from 'react';
import {Image, Animated, ScrollView, View, Text} from 'react-native';
HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE__MIN_HEIGHT = 40;

const ScrollHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE__MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const headerBottomText = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE__MIN_HEIGHT,
      HEADER_MAX_HEIGHT -
        HEADER_MIN_HEIGHT +
        5 +
        PROFILE_IMAGE__MIN_HEIGHT +
        26,
    ],
    outputRange: [-20, -20, -20, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightskyblue',
          height: headerHeight,
          zIndex: headerZIndex,
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            bottom: headerBottomText,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            SAUSKE
          </Text>
        </Animated.View>
      </Animated.View>
      <ScrollView
        style={{flex: 1}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: false}, // Optional async listener
        )}>
        <Animated.View
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderWidth: 3,
            borderColor: 'white',
            overflow: 'hidden',
            marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
            marginLeft: 10,
          }}>
          <Image
            source={require('./assets/sasuke.jpeg')}
            style={{height: null, width: null, flex: 1}}
          />
        </Animated.View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 26, marginLeft: 10}}>
            SAUSKE
          </Text>
        </View>
        <View style={{flex: 1, height: 1000}}></View>
      </ScrollView>
    </View>
  );
};

export default ScrollHeader;
