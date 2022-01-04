import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Animated,
  Dimensions,
  StatusBar,
  PanResponder,
} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import StoriesProgressBar from './StoriesProgressBar';
const {width: windowsWidth, height: windowsHeight} = Dimensions.get('window');

const StoryScroller = ({stories}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const [loaderValue, setLoaderValue] = useState(0);
  const loaderValueRef = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        if (evt.nativeEvent.locationX > windowsWidth / 2) {
          loaderValueRef.setValue(0);
        } else {
          currentIndexRef.current = currentIndexRef.current - 1;
          loaderValueRef.setValue(0);
        }
      },
    }),
  ).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.indicatorContainer}>
        <StoriesProgressBar
          totalStories={stories}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          currentIndexRef={currentIndexRef}
          loaderValueRef={loaderValueRef}
          loaderValue={loaderValue}
          setLoaderValue={setLoaderValue}
        />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          <View
            style={{
              width: windowsWidth,
              backgroundColor: 'black',
              overflow: 'hidden',
            }}
            {...panResponder.panHandlers}>
            <Image
              source={stories[currentIndex].storyResource}
              style={styles.card}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    zIndex: -10,
  },
  scrollContainer: {
    height: windowsHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  card: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hasNotch() ? windowsHeight * 0.045 : windowsHeight * 0.02,
    zIndex: 10,
  },
  indicatorContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hasNotch() ? windowsHeight * 0.145 : windowsHeight * 0.12,
  },
});

export default StoryScroller;
