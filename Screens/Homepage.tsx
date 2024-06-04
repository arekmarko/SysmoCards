import {
  BackHandler,
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../colors';

export default function Homepage({navigation}:any) {
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Group75.png')} style={styles.image} />
      <View style={styles.buttons}>
        <TouchableHighlight>
          <View style={styles.startButton}>
            <Text style={styles.text}>START</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('settings')}>
          <View style={styles.button}>
            <Text style={styles.text}>SETTINGS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.text}>SUPPORT</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => BackHandler.exitApp()}>
          <View style={styles.button}>
            <Text style={styles.text}>QUIT</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.links}>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL(
              'https://www.facebook.com/profile.php?id=100054458454945',
            )
          }>
          <Image
            source={require('../assets/fb.png')}
            style={{height: 60, width: 60}}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/company/sysmo-pl-rozwi%C4%85zania-it-sp-z-o-o/',
            )
          }>
          <Image
            source={require('../assets/in.png')}
            style={{height: 60, width: 60}}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL('https://www.instagram.com/sysmo.software.house/')
          }>
          <Image
            source={require('../assets/ig.png')}
            style={{height: 60, width: 60}}
          />
        </TouchableHighlight>
        <Image
          source={require('../assets/website.png')}
          style={{height: 53, width: 53}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    height: '30%',
    aspectRatio: 1.04 / 1,
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '900',
    letterSpacing: -1,
    fontSize: 24,
  },
  buttons: {
    width: '50%',
    gap: 10,
  },
  startButton: {
    height: 75,
    borderRadius: 50,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    borderColor: Colors.orange,
    borderWidth: 2,
  },
  links: {
    flexDirection: 'row',
    gap: 25,
  },
});
