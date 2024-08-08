import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {boldFontStyles, regularFontStyles} from '../theme/typography';
import {colors} from '../theme/colors';

export const Pressure = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>PRESSURE</Text>
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
});
