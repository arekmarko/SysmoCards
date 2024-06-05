import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../colors';
import Card from '../components/Card';

export default function Game() {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.text}>00:30</Text>
      </View>
      <View style={{gap: 10}}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Card name="mouse" type="image" />
          <Card name="mouse" type="image" />
          <Card name="mouse" type="image" />
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Card name="mouse" type="image" />
          <Card name="mouse" type="image" />
          <Card name="mouse" type="image" />
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Card name="mouse" type="image" />
          <Card name="mouse" type="image" />
          <Card name="mouse" type="image" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    backgroundColor: Colors.black,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    elevation: 5,
    margin: 20
  },
  text: {
    color: Colors.white,
    fontSize: 32,
  },
});
