import React, {useRef} from 'react';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
const {width: windowsWidth, height: windowsHeight} = Dimensions.get('window');
import StoryScroller from './StoryScroller';
import StoryUserCard from './StoryUserCard';
const ViewStory = ({route}) => {
  const {stories, userAvatar, userName} = route.params.story;
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StoryUserCard userAvatar={userAvatar} userName={userName} />
      <StoryScroller stories={stories} />
    </View>
  );
};

export default ViewStory;
