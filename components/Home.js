import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import CustomStories from './CustomStories/CustomStories';
const storiesData = [
  {
    userId: 1,
    userName: 'Naruto Uzumaki',
    userAvatar: require('@assets/StoriesAssets/user1.png'),
    stories: [
      {
        storyId: 1,
        storyResource: require('@assets/StoriesAssets/story5.jpeg'),
      },
      {
        storyId: 2,
        storyResource: require('@assets/StoriesAssets/story6.jpeg'),
      },
      {
        storyId: 3,
        storyResource: require('@assets/StoriesAssets/story4.jpeg'),
      },
    ],
  },
  {
    userId: 2,
    userName: 'Pain',
    userAvatar: require('@assets/StoriesAssets/user2.jpg'),
    stories: [
      {
        storyId: 1,
        storyResource: require('@assets/StoriesAssets/story1.jpeg'),
      },
      {
        storyId: 2,
        storyResource: require('@assets/StoriesAssets/story2.jpeg'),
      },
      {
        storyId: 3,
        storyResource: require('@assets/StoriesAssets/story3.jpeg'),
      },
    ],
  },
  {
    userId: 3,
    userName: 'Sauske Uchiha',
    userAvatar: require('@assets/StoriesAssets/user3.jpeg'),
    stories: [
      {
        storyId: 1,
        storyResource: require('@assets/StoriesAssets/story7.jpeg'),
      },
      {
        storyId: 2,
        storyResource: require('@assets/StoriesAssets/story9.jpeg'),
      },
    ],
  },
  {
    userId: 4,
    userName: 'Itachi Uchiha',
    userAvatar: require('@assets/StoriesAssets/user4.jpeg'),
    stories: [
      {
        storyId: 5,
        storyResource: require('@assets/StoriesAssets/story10.jpeg'),
      },
      {
        storyId: 6,
        storyResource: require('@assets/StoriesAssets/story11.jpeg'),
      },
      {
        storyId: 1,
        storyResource: require('@assets/StoriesAssets/story6.jpeg'),
      },
      {
        storyId: 2,
        storyResource: require('@assets/StoriesAssets/story7.jpeg'),
      },
      {
        storyId: 3,
        storyResource: require('@assets/StoriesAssets/story8.jpeg'),
      },
      {
        storyId: 4,
        storyResource: require('@assets/StoriesAssets/story9.jpeg'),
      },
    ],
  },
];
const Home = ({navigation}) => {
  return (
    <View style={styles.Contrainer}>
      <ScrollView style={styles.MainContrainer}>
        <View style={styles.StoriesView}>
          <CustomStories stories={storiesData} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HeaderScroll')}>
          <View style={styles.ComponentContainer}>
            <Text style={styles.ComponentText}>Header Scroll</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ImageScroller')}>
          <View style={styles.ComponentContainer}>
            <Text style={styles.ComponentText}>Image Scroller</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpSwiper')}>
          <View style={styles.ComponentContainer}>
            <Text style={styles.ComponentText}>Up Down Swiper</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CustomLoader')}>
          <View style={styles.ComponentContainer}>
            <Text style={styles.ComponentText}>Custom Loader</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  Contrainer: {flex: 1},
  MainContrainer: {flex: 1},

  ComponentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
    borderRadius: 10,
    height: 200,
    marginVertical: 5,
  },
  ComponentText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  StoriesView: {},
});
