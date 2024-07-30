import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {HourlyCards} from '../components/HourlyCards';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../src/theme/colors';

export const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} edges={'top'}>
        <View style={styles.navBarView}></View>
      </SafeAreaView>
      <ScrollView>
        <HourlyCards></HourlyCards>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navBarView: {
    backgroundColor: colors.additionalColors.solidPurple,
    height: 90,
  },
});
