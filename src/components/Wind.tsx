import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {boldFontStyles, regularFontStyles} from '../theme/typography';

export const Wind = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>WIND</Text>
      <Text style={styles.windRate}>9.7km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: colors.linearPurple.primary,
    borderRadius: 22,
    padding: 15,
    paddingBottom: 30,
    width: '48%',
    justifyContent: 'space-between',
  },
  label: {
    ...boldFontStyles.size16,
    color: colors.light.secondary,
  },
  windRate: {
    ...regularFontStyles.size28,
    marginTop: 10,
    marginBottom: 40,
  },
});
