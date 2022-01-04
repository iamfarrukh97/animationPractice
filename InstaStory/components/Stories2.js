// @flow
import React, {useEffect, useRef, createRef} from 'react';
import {StyleSheet, Animated, Dimensions, Platform, View} from 'react-native';

import Story from './Story';

const {width} = Dimensions.get('window');
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === 'ios' ? 2 : 1.2;

const Stories2 = ({stories}) => {
  const x = useRef(new Animated.Value(0)).current;
  //   const storiess = stories.map(() => createRef());
  useEffect(() => {
    x.addListener(() =>
      stories.forEach((story, index) => {
        const offset = index * width;
        const inputRange = [offset - width, offset + width];
        const translateX = x
          .interpolate({
            inputRange,
            outputRange: [width / ratio, -width / ratio],
            extrapolate: 'clamp',
          })
          .__getValue();

        const rotateY = x
          .interpolate({
            inputRange,
            outputRange: [`${angle}rad`, `-${angle}rad`],
            extrapolate: 'clamp',
          })
          .__getValue();

        const translateX1 = x
          .interpolate({
            inputRange,
            outputRange: [width / 2, -width / 2],
            extrapolate: 'clamp',
          })
          .__getValue();

        const parsed = parseFloat(
          rotateY.substr(0, rotateY.indexOf('rad')),
          10,
        );
        const alpha = Math.abs(parsed);
        const gamma = angle - alpha;
        const beta = Math.PI - alpha - gamma;
        const w = width / 2 - ((width / 2) * Math.sin(gamma)) / Math.sin(beta);
        const translateX2 = parsed > 0 ? w : -w;

        const style = {
          transform: [
            {perspective},
            {translateX},
            {rotateY},
            {translateX: translateX2},
          ],
        };
        story.current.setNativeProps({style});
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      {stories
        .map((story, i) => (
          <Animated.View
            // ref={stories[i]}
            style={StyleSheet.absoluteFill}
            key={story.id}>
            <Story
              source={story.source}
              user={story.user}
              avatar={story.avatar}
            />
          </Animated.View>
        ))
        .reverse()}
      <Animated.ScrollView
        style={StyleSheet.absoluteFillObject}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={width}
        contentContainerStyle={{width: width * stories.length}}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x},
              },
            },
          ],
          {useNativeDriver: true},
        )}
        decelerationRate={0.99}
        horizontal
      />
    </View>
  );
};
export default Stories2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
