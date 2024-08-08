import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {boldFontStyles} from '../theme/typography';

export const Wind = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>WIND</Text>
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
