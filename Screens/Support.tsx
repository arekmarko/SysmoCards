import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { Colors } from '../colors'
import BackButton from '../components/BackButton'

export default function Support() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={[styles.text, {color: Colors.white, fontSize: 36, alignSelf: 'center'}]}>
        SUPPORT
      </Text>
      <View style={styles.box}>
        <Text style={styles.text}>Please enter your e-mail:</Text>
        <TextInput style={styles.input} placeholder='example@email.com'/>
        <Text style={styles.text}>Message</Text>
        <TextInput style={[styles.input, {textAlignVertical: 'top'}]} multiline={true} numberOfLines={6} placeholder='Your message...'/>
        <TouchableHighlight>
          <View style={styles.sendButton}>
          <Text style={styles.text}>SEND</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{gap:20}}>
        <View style={{flexDirection: 'row', gap: 10}}>
        <Image source={require('../assets/envelope_icon.png')} style={{height:40, width: 40}}/>
        <Text style={[styles.text, {color: Colors.white}]}>contact@sysmo.pl</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
        <Image source={require('../assets/website.png')} style={{height:40, width: 40}}/>
        <Text style={[styles.text, {color: Colors.white}]}>sysmo.pl</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 30,
        paddingVertical: '10%'
    },
    text: {
      color: Colors.black,
      fontWeight: '700',
      letterSpacing: -1,
      fontSize: 24,
      alignSelf: 'flex-start'
    },
    box: {
      backgroundColor: Colors.orange,
      borderColor: Colors.grey,
      borderWidth: 5,
      borderRadius: 20,
      padding: 20,
      paddingVertical: 50,
      width: '80%',
      gap: 10,
      alignItems: 'center',
    },
    input: {
      backgroundColor: Colors.white,
      borderWidth: 1,
      borderRadius: 20,
      width: '100%',
      marginBottom: 30
    },
    sendButton: {
      backgroundColor: Colors.white,
      borderRadius: 50,
      padding: 10,
      paddingHorizontal: 50
    },
})