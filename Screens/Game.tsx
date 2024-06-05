import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../colors';
import Card from '../components/Card';
import {cardsUri} from '../cards';

function Modal(props: any) {
  return (
    <View style={styles.modal}>
      <View style={{alignItems: 'center', width: '50%'}}>
        <Text style={styles.text}>MENU</Text>
        <View style={[styles.buttons, {padding: 5}]}>
          <Text style={[styles.text, {fontSize: 18}]}>00:30</Text>
        </View>
      </View>
      <TouchableNativeFeedback onPress={() => props.setModalVisible(false)}>
        <View style={styles.buttons}>
          <Text style={styles.text}>RESUME</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.buttons}>
          <Text style={styles.text}>new game</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.buttons}>
          <Text style={styles.text}>settings</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate('homepage')}>
        <View style={styles.buttons}>
          <Text style={styles.text}>home</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default function Game({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {modalVisible ? (
        <Modal setModalVisible={setModalVisible} navigation={navigation} />
      ) : (
        <></>
      )}
      <TouchableNativeFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.menuButton}>
          <Text style={{color: Colors.white, fontSize: 18}}>MENU</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.timer}>
        <Text style={styles.text}>00:30</Text>
      </View>
      <View style={{gap: 10, width: '90%'}}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={4}
            contentContainerStyle={{gap: 10}}
            renderItem={({item, index}) => {
              return (
                <View style={{flex: 1, margin: 5}}>
                  <Card name={item.name} type="image" />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    zIndex: 1,
    gap: 30,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: Colors.black,
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    elevation: 5,
  },
  timer: {
    backgroundColor: Colors.black,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    elevation: 5,
    margin: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    textTransform: 'uppercase',
  },
  buttons: {
    backgroundColor: Colors.orange,
    padding: 15,
    alignItems: 'center',
    width: '50%',
    borderRadius: 50,
  },
});

const data = [
  {id: '1', name: 'mouse'},
  {id: '2', name: 'coding'},
  {id: '3', name: 'email'},
  {id: '4', name: 'cpu'},
  {id: '5', name: 'coding'},
  {id: '6', name: 'bug1'},
  {id: '7', name: 'cpu'},
  {id: '8', name: 'bug1'},
  {id: '9', name: 'usb-drive'},
  {id: '10', name: 'joystick'},
  {id: '11', name: 'email'},
  {id: '12', name: 'plugin'},
  {id: '13', name: 'usb-drive'},
  {id: '14', name: 'joystick'},
  {id: '15', name: 'mouse'},
  {id: '16', name: 'plugin'},
];
