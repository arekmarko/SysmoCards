import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import {Colors} from '../colors';
import { Slider } from '@react-native-assets/slider';

export default function Settings({navigation}: any) {
  const [vibrations, setVibrations] = useState(true);
  const toggleVibrations = () => setVibrations(prev => !prev);
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={[styles.text, {color: Colors.white, fontSize: 36}]}>
        SETTINGS
      </Text>
      <View style={styles.box}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {flex: 1}]}>LANGUAGE</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Image source={require('../assets/PL.png')} style={styles.image} />
            <Image source={require('../assets/GB.png')} style={styles.image} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {flex: 1}]}>MUSIC</Text>
          <View style={{flex: 1}}>
            <Slider maximumTrackTintColor={Colors.white} minimumTrackTintColor={'#777777'} thumbTintColor={Colors.black} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {flex: 1}]}>SFX</Text>
          <View style={{flex: 1}}>
            <Slider maximumTrackTintColor={Colors.white} minimumTrackTintColor={'#777777'} thumbTintColor={Colors.black} />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={[styles.text, {flex: 1}]}>VIBRATIONS</Text>
          <View style={{flex: 1}}>
          <Switch
            trackColor={{false: Colors.white, true: '#777777'}}
            thumbColor={Colors.black}
            onValueChange={toggleVibrations}
            value={vibrations}
            style={{transform: [{scale: 1 }], alignSelf: 'flex-end',}}
            />
            </View>
        </View>
      </View>
      <TouchableHighlight onPress={() => navigation.navigate('support')}>
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
    gap: 20,
  },
  supportButton: {
    backgroundColor: Colors.orange,
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  image: {
    aspectRatio: 1 / 0.58,
    width: '40%',
  },
});
