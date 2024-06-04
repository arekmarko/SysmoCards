import {
    Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../colors';
import Icons from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Rules({navigation}: any) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('acceptedRules', 'true');
      console.log('saved');
    } catch(e) { console.log(e); }
  }
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.navigate('main')}>
        <View style={styles.backButton}>
          <Icons name="play" size={30} color={Colors.white} />
        </View>
      </TouchableNativeFeedback>
      <View style={styles.box}>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: Colors.black,
            textAlign: 'center',
          }}>
          RULES
        </Text>
        <Text style={styles.text}>
          Wygraj darmowe godziny programistyczne (kod)
        </Text>
        <Text
          style={[
            styles.text,
            {textAlign: 'left'},
          ]}>{`\u2022 Nagroda obowiązuję tylko w software house Sysmo.pl
\u2022 Ilość godzin uzależniona jest od ukończonego poziomu trudności
\u2022 Kod ma ważność 3 miesięcy od otrzymania
\u2022 Aby skorzystać z kodu, skontaktuj się z nami :)`}</Text>
        <Text style={styles.text}>
          Pełny regulamin znajdziesz{' '}
          <Text style={{color: Colors.orange}}>tutaj</Text>
        </Text>
        <View style={styles.buttons}>
          <TouchableNativeFeedback onPress={() => {setToggleCheckBox(!toggleCheckBox), setDisplayAlert(false)}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{height: 25, width: 25, borderWidth: 2, alignItems: 'center', backgroundColor: toggleCheckBox ? Colors.orange : Colors.white}}>
                <Icons name='check' size={20} color={Colors.white} />
              </View>
              <Text style={styles.text}>ACCEPT</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.nextButton}>
            <TouchableNativeFeedback
              onPress={() => toggleCheckBox ? [ navigation.navigate('homepage'), saveData() ] : setDisplayAlert(true)}>
              <Text style={styles.text}>NEXT</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
          <Text style={{display: displayAlert ? 'flex' : 'none', color: 'red'}}>Accept the rules.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
  box: {
    backgroundColor: Colors.grey,
    borderColor: Colors.orange,
    borderWidth: 5,
    borderRadius: 20,
    padding: 20,
    width: '80%',
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: Colors.orange,
    borderColor: Colors.black,
    borderWidth: 2,
    width: '45%',
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
});
