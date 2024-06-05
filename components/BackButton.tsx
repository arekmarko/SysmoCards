import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import {Colors} from '../colors';
import Icons from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback onPress={() => navigation.goBack()}>
      <View style={styles.backButton}>
        <Icons name="play" size={30} color={Colors.white} />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: Colors.orange,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-180deg'}],
    zIndex: 10
  },
});
