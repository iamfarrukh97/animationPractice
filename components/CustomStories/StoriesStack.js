import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewStory from './ViewStory';
import CustomStories from './CustomStories';
import Stories from './Stories';
const Stack = createStackNavigator();

export default function StoriesStack() {
  return (
    <Stack.Navigator
      initialRouteName="ViewStory"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CustomStories" component={CustomStories} />
      <Stack.Screen name="Stories" component={Stories} />
      <Stack.Screen name="ViewStory" component={ViewStory} />
    </Stack.Navigator>
  );
}
