import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import Map from '../../assets/vectors/map.svg';
import List from '../../assets/vectors/list.svg';
import {Image} from 'react-native';

export const MainScreen = ({navigation}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/images/mountainImage.png')}
      style={styles.mountainImage}>
      <ImageBackground
        resizeMode="contain"
        source={require('../../assets/images/house.png')}
        style={styles.houseImage}></ImageBackground>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.textView}>
          <Text style={styles.cityName}>Montreal</Text>
          <Text style={styles.temperature}>19˚</Text>
          <Text style={styles.condition}>Mostly Clear</Text>
          <Text style={styles.highLow}>H:24˚ L:18˚</Text>
        </View>
        <View style={styles.tabBarView}>
          <View style={styles.tabBarBackgroundView}>
            <Image
              source={require('../../assets/images/rectangle.png')}
              style={styles.rectangle}
            />

            <Image
              source={require('../../assets/images/curve.png')}
              style={styles.curve}
              resizeMode="contain"
            />
          </View>
          <View style={styles.buttonView}>
            <Pressable>{<Map />}</Pressable>
            <Pressable onPress={() => navigation.navigate('Details')}>
              <Image source={require('../../assets/images/button.png')} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Weather')}>
              {<List />}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    borderWidth: 1,
  },
  mountainImage: {
    height: '100%',
    width: '100%',
  },
  houseImage: {
    width: '100%',
    height: 390,
    position: 'absolute',
    bottom: 100,
  },
  textView: {
    alignItems: 'center',
    top: 70,
  },
  cityName: {fontSize: 41, color: 'white'},
  temperature: {fontSize: 70, color: 'white'},
  condition: {fontSize: 24, color: 'gray'},
  highLow: {
    fontSize: 24,
    color: 'white',
  },
  tabBarView: {
    width: '100%',
    bottom: 0,

    position: 'absolute',
    alignItems: 'center',
  },
  tabBarBackgroundView: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    height: 100,
    alignItems: 'center',
  },
  rectangle: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 0,
    bottom: 0,
  },
  curve: {
    zIndex: 1,
    minWidth: '100%',
  },
  buttonView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
