import React, {useRef} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width: windowsWidth, height: windowsHeight} = Dimensions.get('window');
import {hasNotch} from 'react-native-device-info';
const StoryUserCard = ({userName, userAvatar}) => {
  const profileAvatarSize = windowsWidth * 0.15;
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        top: hasNotch() ? windowsHeight * 0.055 : windowsHeight * 0.03,

        height: windowsHeight / (windowsHeight * 0.015),
        width: windowsWidth * 0.97,
        alignSelf: 'center',
        zIndex: 10,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: profileAvatarSize,
                width: profileAvatarSize,
                borderRadius: profileAvatarSize / 2,
                overflow: 'hidden',
              }}>
              <Image
                source={userAvatar}
                style={{flex: 1, height: null, width: null}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 4,

              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '800', fontSize: 14}}>
              {userName}
            </Text>
          </View>
        </View>
        <View style={{flex: 2}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  backgroundColor: 'rgba(100,100,100,0.5)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  X
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StoryUserCard;
