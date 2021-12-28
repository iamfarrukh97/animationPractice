import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const UpSwiper = () => {
  const carImages = [
    {id: 1, uri: require('./assets/carimages/car1.jpeg')},
    {id: 2, uri: require('./assets/carimages/car2.jpeg')},
    {id: 3, uri: require('./assets/carimages/car3.jpeg')},
    {id: 4, uri: require('./assets/carimages/car4.jpeg')},
    {id: 5, uri: require('./assets/carimages/car5.jpeg')},
    {id: 6, uri: require('./assets/carimages/car6.jpeg')},
    {id: 7, uri: require('./assets/carimages/car7.jpeg')},
  ];
  const position = useRef(new Animated.ValueXY()).current;
  const swipedCardPosition = useRef(
    new Animated.ValueXY({x: 0, y: -windowHeight}),
  ).current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderMove: Animated.event([null, {dy: position.y}], {
      //   useNativeDriver: false,
      // }),
      onPanResponderMove: (e, gestureState) => {
        if (
          gestureState.dy > 0 &&
          currentIndexRef.current > 0 &&
          gestureState.vy > 0.7
        ) {
          swipedCardPosition.setValue({
            x: 0,
            y: -windowHeight + gestureState.dy,
          });
        } else {
          position.setValue({x: 0, y: gestureState.dy});
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (
          currentIndexRef.current > 0 &&
          gestureState.dy > 50 &&
          gestureState.vy > 0.7
        ) {
          Animated.timing(swipedCardPosition, {
            toValue: {x: 0, y: 0},
            duration: 400,
            useNativeDriver: false,
          }).start(() => {
            currentIndexRef.current = currentIndexRef.current - 1;
            setCurrentIndex(prev => prev - 1);
            swipedCardPosition.setValue({x: 0, y: -windowHeight});
          });
        } else if (
          -gestureState.dy > 50 &&
          -gestureState.vy > 0.7 &&
          currentIndexRef.current < carImages.length - 1
        ) {
          Animated.timing(position, {
            toValue: {x: 0, y: -windowHeight},
            duration: 400,
            useNativeDriver: false,
          }).start(() => {
            currentIndexRef.current = currentIndexRef.current + 1;
            setCurrentIndex(prev => prev + 1);
            position.setValue({x: 0, y: 0});
          });
        } else {
          // Animated.parallel([
          Animated.spring(position, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
          Animated.spring(swipedCardPosition, {
            toValue: {x: 0, y: -windowHeight},
            useNativeDriver: false,
          }).start();

          // ]).start;
        }
        // position.flattenOffset();
      },
    }),
  ).current;
  const renderArticals = () => {
    return carImages
      .map((image, index) => {
        if (index === currentIndex - 1) {
          return (
            <Animated.View
              key={image.id}
              style={swipedCardPosition.getLayout()}
              {...panResponder.panHandlers}>
              <View
                style={{
                  flex: 1,
                  width: windowWidth,
                  height: windowHeight,
                  position: 'absolute',
                  backgroundColor: 'white',
                }}>
                <View style={{flex: 2, backgroundColor: 'black'}}>
                  <Image
                    source={image.uri}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 3, padding: 7}}>
                  <Text style={{color: 'black'}}>
                    Acura put on a presentation showing off the design of its
                    reborn Integra model tonight, ahead of a fuller unveiling at
                    the Los Angeles Auto Show. The online presentation of the
                    Integra Prototype was short on details about the powertrain,
                    performance and interior of the vehicle, and focused mainly
                    on the exterior design. And on that front, there’s clearly
                    no mistaking the resemblance to a certain Honda sedan model
                    you may have heard of. In fact, the new Integra is based in
                    part on the Civic, so their similitude shouldn’t come as a
                    surprise. In any case, just to be extra clear, Acura has
                    plastered big Integra lettering on the sides of the new
                    prototype. Other notable features include Acura’s new
                    frameless pentagon grille, matched with jewel-eye headlights
                    and rear brake lights. The wide one-piece taillights are a
                    nod to the Integra of old, and the front and rear fascia get
                    Integra lettering embossed on them as well. Eagle-eyed
                    observers will have noted that the yellow colour of the
                    Prototype is the same offered with the NSX. That yellow is
                    nicely offset by black accents and elements on the roof,
                    rear spoiler, the front grille and the tops of the side
                    mirrors.
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        } else if (index < currentIndex) {
          return null;
        }
        if (index === currentIndex) {
          return (
            <Animated.View
              key={image.id}
              style={position.getLayout()}
              {...panResponder.panHandlers}>
              <View
                style={{
                  flex: 1,
                  width: windowWidth,
                  height: windowHeight,
                  position: 'absolute',
                  backgroundColor: 'white',
                }}>
                <View style={{flex: 2, backgroundColor: 'black'}}>
                  <Image
                    source={image.uri}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 3, padding: 7}}>
                  <Text style={{color: 'black'}}>
                    Acura put on a presentation showing off the design of its
                    reborn Integra model tonight, ahead of a fuller unveiling at
                    the Los Angeles Auto Show. The online presentation of the
                    Integra Prototype was short on details about the powertrain,
                    performance and interior of the vehicle, and focused mainly
                    on the exterior design. And on that front, there’s clearly
                    no mistaking the resemblance to a certain Honda sedan model
                    you may have heard of. In fact, the new Integra is based in
                    part on the Civic, so their similitude shouldn’t come as a
                    surprise. In any case, just to be extra clear, Acura has
                    plastered big Integra lettering on the sides of the new
                    prototype. Other notable features include Acura’s new
                    frameless pentagon grille, matched with jewel-eye headlights
                    and rear brake lights. The wide one-piece taillights are a
                    nod to the Integra of old, and the front and rear fascia get
                    Integra lettering embossed on them as well. Eagle-eyed
                    observers will have noted that the yellow colour of the
                    Prototype is the same offered with the NSX. That yellow is
                    nicely offset by black accents and elements on the roof,
                    rear spoiler, the front grille and the tops of the side
                    mirrors.
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={image.id}>
              <View
                style={{
                  flex: 1,
                  width: windowWidth,
                  height: windowHeight,
                  position: 'absolute',
                  backgroundColor: 'white',
                }}>
                <View style={{flex: 2, backgroundColor: 'black'}}>
                  <Image
                    source={image.uri}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 3, padding: 7}}>
                  <Text style={{color: 'black'}}>
                    Acura put on a presentation showing off the design of its
                    reborn Integra model tonight, ahead of a fuller unveiling at
                    the Los Angeles Auto Show. The online presentation of the
                    Integra Prototype was short on details about the powertrain,
                    performance and interior of the vehicle, and focused mainly
                    on the exterior design. And on that front, there’s clearly
                    no mistaking the resemblance to a certain Honda sedan model
                    you may have heard of. In fact, the new Integra is based in
                    part on the Civic, so their similitude shouldn’t come as a
                    surprise. In any case, just to be extra clear, Acura has
                    plastered big Integra lettering on the sides of the new
                    prototype. Other notable features include Acura’s new
                    frameless pentagon grille, matched with jewel-eye headlights
                    and rear brake lights. The wide one-piece taillights are a
                    nod to the Integra of old, and the front and rear fascia get
                    Integra lettering embossed on them as well. Eagle-eyed
                    observers will have noted that the yellow colour of the
                    Prototype is the same offered with the NSX. That yellow is
                    nicely offset by black accents and elements on the roof,
                    rear spoiler, the front grille and the tops of the side
                    mirrors.
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        }
      })
      .reverse();
  };
  return <View style={{flex: 1}}>{renderArticals()}</View>;
};
export default UpSwiper;
