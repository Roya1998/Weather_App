import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {boldFontStyles, regularFontStyles} from '../theme/typography';
import {colors} from '../theme/colors';

export const Rainfall = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>RAINFALL</Text>
      <Text style={styles.statistics}>1.8 mm in last hour</Text>
      <Text style={styles.text}>1.2 mm expected in text 24h.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: colors.linearPurple.primary,
    borderRadius: 22,
    padding: 15,
    width: '48%',
  },
  label: {
    ...boldFontStyles.size16,
    color: colors.light.secondary,
  },
  statistics: {
    ...regularFontStyles.size28,
    lineHeight: 30,
    marginTop: 10,
    marginBottom: 25,
  },
  text: {
    ...regularFontStyles.size13,
  },
});
