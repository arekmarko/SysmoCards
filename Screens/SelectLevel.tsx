import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import {Colors} from '../colors';

export default function SelectLevel({navigation}:any) {
    const [level, setLevel] = useState('');
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.background}>
        <Text style={styles.text}>Select difficulty Level</Text>
      </View>
      <View style={{gap: 20, width: '60%'}}>
        <TouchableNativeFeedback onPress={() => setLevel('easy')}>
          <View style={level == 'easy' ? styles.selectedButton : styles.button}>
            <Text style={styles.text}>easy</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setLevel('medium')}>
          <View style={level == 'medium' ? styles.selectedButton : styles.button}>
            <Text style={styles.text}>medium</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setLevel('hard')}>
          <View style={level == 'hard' ? styles.selectedButton : styles.button}>
            <Text style={styles.text}>hard</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate('game')}>
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
  selectedButton: {
    backgroundColor: Colors.orange,
    borderWidth: 2,
    borderColor: Colors.grey,
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  }
});
