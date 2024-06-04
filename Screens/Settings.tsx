import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import {Colors} from '../colors';

export default function Settings({navigation}: any) {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={[styles.text, {color: Colors.white, fontSize: 36}]}>
        SETTINGS
      </Text>
      <View style={styles.box}>
        <View style={{flex: 1, alignItems: 'flex-start', gap: 20}}>
          <Text style={styles.text}>LANGUAGE</Text>
          <Text style={styles.text}>MUSIC</Text>
          <Text style={styles.text}>SFX</Text>
          <Text style={styles.text}>VIBRATIONS</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', gap: 20}}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Image source={require('../assets/PL.png')} style={styles.image} />
            <Image source={require('../assets/GB.png')} style={styles.image} />
          </View>
          <Text style={styles.text}>music</Text>
          <Text style={styles.text}>sfx</Text>
          <Text style={styles.text}>vibrations</Text>
        </View>
      </View>
      <TouchableHighlight>
        <View style={styles.supportButton}>
          <Text style={styles.text}>SUPPORT</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: -1,
    fontSize: 24,
  },
  box: {
    backgroundColor: Colors.orange,
    borderColor: Colors.grey,
    borderWidth: 5,
    borderRadius: 20,
    padding: 20,
    paddingVertical: 50,
    width: '80%',
    flexDirection: 'row',
  },
  supportButton: {
    backgroundColor: Colors.orange,
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  image: {
    aspectRatio: 1 / 0.58,
    flex: 1
  },
});
