import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavBar} from './NavBar';

export const HourlyCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.clock}>12 AM</Text>
      <Text style={styles.temperature}>19˚</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 60,
    zIndex: 1,
    borderRadius: 30,
    backgroundColor: '#48319D',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 15,
  },
  clock: {
    fontSize: 24,
  },
});
