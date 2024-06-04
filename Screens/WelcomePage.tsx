import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomePage({navigation}:any) {
  const [acceptedRules, setAcceptedRules] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('acceptedRules');
      if (value!=null){
        setAcceptedRules(true);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData();
  })
  return (
    <TouchableWithoutFeedback onPress={() => {acceptedRules ? navigation.navigate('homepage') : navigation.navigate('rules')}}>
    <View style={styles.container}>
      <Image source={require('../assets/Group75.png')} style={styles.image}/>
      <View style={{position: 'absolute', bottom: 0}}>
        <Text style={styles.text}>Powered by</Text>
        <View>
            <Image source={require('../assets/Logo.png')} style={{width: 185, height: 39}}/>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.white, 
        fontSize: 25,
        lineHeight: 37.5,
        letterSpacing: -0.5,
        fontWeight: '700',
        textAlign: 'center'
    },
    image: {
        height: '30%',
        aspectRatio: 1.04/1
    }
})