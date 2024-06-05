import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../colors';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import Animated, {AnimatedRef, useAnimatedRef} from 'react-native-reanimated';

type Props = {
  item: any;
  index: number;
  flatlistRef: AnimatedRef<FlatList<any>>;
  navigation: any;
};

const TutorialItem = ({item, index, flatlistRef, navigation}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  return (
    <View style={{width: SCREEN_WIDTH, justifyContent: 'center'}}>
      <View style={styles.box}>
        <Text style={[styles.text, {fontSize: 32}]}>{item.title}</Text>
        <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
          <Card name="mouse" type={item.first}/>
          <Card name="mouse" type={item.second}/>
        </View>
        <Text style={[styles.text, {textAlign: 'left'}]}>
          {item.desc}
        </Text>
        <TouchableNativeFeedback
          onPress={() =>
            index < 2
              ? flatlistRef.current?.scrollToIndex({index: index + 1})
              : navigation.navigate('selectLevel')
          }>
          <View style={styles.button}>
            <Text style={[styles.text, {color: Colors.black}]}>NEXT</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default function Tutorial({navigation}: any) {
  const flatlistRef = useAnimatedRef<FlatList<any>>();
  return (
    <View style={styles.container}>
      <BackButton />
      <Animated.FlatList
        ref={flatlistRef}
        data={tutorialData}
        renderItem={({item, index}) => {
          return (
            <TutorialItem
              item={item}
              index={index}
              flatlistRef={flatlistRef}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
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
  box: {
    backgroundColor: Colors.orange,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    gap: 20,
    margin: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: -0.5,
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.white,
    padding: 5,
    width: '45%',
    borderRadius: 20,
    alignSelf: 'center',
  },
});

const tutorialData = [
  {
    id: '1',
    title: 'Level EASY',
    desc: 'The player must match pairs of appropriate pictures',
    first: 'image',
    second: 'image',
  },
  {
    id: '2',
    title: 'Level MEDIUM',
    desc: `It's about connecting a picture with a word that matches it`,
    first: 'image',
    second: 'text',
  },
  {
    id: '3',
    title: 'Level HARD',
    desc: `The player must match key words with an adequate definition`,
    first: 'text',
    second: 'desc',
  },
];
