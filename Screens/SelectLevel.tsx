import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import {Colors} from '../colors';

export default function SelectLevel() {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.background}>
        <Text style={styles.text}>Select difficulty Level</Text>
      </View>
      <View style={{gap: 20, width: '60%'}}>
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <Text style={styles.text}>easy</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <Text style={styles.text}>medium</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <Text style={styles.text}>hard</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <TouchableNativeFeedback>
        <View style={[styles.background, {width: '100%'}]}>
          <Text style={[styles.text, {fontWeight: '900', fontSize: 32}]}>
            play
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: '5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -1,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  background: {
    backgroundColor: Colors.orange,
    borderRadius: 50,
    padding: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.orange,
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
});
