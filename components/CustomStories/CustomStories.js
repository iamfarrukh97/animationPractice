import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Stories from './Stories';

const CustomStories = ({stories, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={stories}
        renderItem={({item}) => <Stories story={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CustomStories;
