import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const storySize = 100;
const storyAroundCircleSize = 105;
const Stories = ({story, stories}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, marginHorizontal: 3}}>
      <View
        style={{
          width: storyAroundCircleSize,
          height: storyAroundCircleSize,
          borderRadius: storyAroundCircleSize / 2,
          borderWidth: 1,
          borderColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StoriesStack', {
              screen: 'ViewStory',
              params: {story, stories},
            })
          }>
          <View
            style={{
              width: storySize,
              height: storySize,
              backgroundColor: 'black',
              borderRadius: storySize / 2,
              overflow: 'hidden',
            }}>
            <Image
              source={story.userAvatar}
              style={{flex: 1, height: null, width: null}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stories;
