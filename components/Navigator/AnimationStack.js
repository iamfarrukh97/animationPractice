import React from 'react';
import {
  HeaderScroll,
  ImageScroller,
  CustomLoader,
  UpSwiper,
} from '@singalComponents';
import StoriesStack from '../CustomStories/StoriesStack';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
const Stack = createStackNavigator();

const AnimateNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HeaderScroll" component={HeaderScroll} />
      <Stack.Screen name="ImageScroller" component={ImageScroller} />
      <Stack.Screen name="CustomLoader" component={CustomLoader} />
      <Stack.Screen name="UpSwiper" component={UpSwiper} />
      <Stack.Screen
        name="StoriesStack"
        component={StoriesStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AnimateNavigator;
