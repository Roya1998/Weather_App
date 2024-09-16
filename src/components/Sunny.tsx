import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Sunny = () => {
  return (
    <Image style={styles.sunny} source={require('../assets/images/sun.png')} />
  );
};

export default Sunny;

const styles = StyleSheet.create({
  sunny: {width: 150, height: 150, marginBottom: 20},
});
