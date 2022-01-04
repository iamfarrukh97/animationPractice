// @flow
import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Avatar from './Avatar';

const Story = ({source, user, avatar}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={source} />
        <Avatar user={user} avatar={avatar} />
      </View>
      <View style={styles.footer}>
        <Feather name="camera" color="white" size={28} />
        <TextInput style={styles.input} />
        <Feather name="message-circle" color="white" size={28} />
      </View>
    </SafeAreaView>
  );
};

export default Story;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    height: 28,
    width: 250,
    borderRadius: Platform.OS === 'android' ? 0 : 10,
  },
});
