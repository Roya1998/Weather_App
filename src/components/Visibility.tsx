import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {boldFontStyles, regularFontStyles} from '../theme/typography';
import {colors} from '../theme/colors';
export const Visibility = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>VISIBILITY</Text>
      <Text style={styles.km}>8 km</Text>
      <Text style={styles.text}>Similar to the actual temperature.</Text>
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
  km: {
    ...regularFontStyles.size28,
    marginTop: 10,
    marginBottom: 40,
  },
  text: {
    ...regularFontStyles.size13,
  },
});
