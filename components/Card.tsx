import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../colors';
import {cardsUri} from '../cards';

type CardProps = {
  name: string;
  type: string;
};
export default function Card(props: CardProps) {
  return (
    <View style={styles.container}>
      {props.type === 'image' ? (
        <Image source={cardsUri[props.name].image} resizeMode='center' style={styles.image} />
      ) : props.type === 'text' ? (
        <Text style={[styles.text, {fontSize: 24, textTransform: 'capitalize'}]}>{props.name}</Text>
      ) : (
        <Text style={styles.text}>{cardsUri[props.name].desc}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.black,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 0.65 / 1,
  },
  image: {
    height: '50%',
    // aspectRatio: 1 / 1.5,
  },
  text: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '900',
    textAlign: 'center',
    padding: 5
  },
});
