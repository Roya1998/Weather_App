import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {colors} from '../theme/colors';
import {boldFontStyles, regularFontStyles} from '../theme/typography';

export const UVIndex = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>UV INDEX</Text>
      <Text style={styles.conditionNumber}>4</Text>
      <Text style={styles.condition}>Moderate</Text>
      <Slider
        maximumValue={11}
        minimumValue={0}
        minimumTrackTintColor={colors.linearBlue.secondary}
        maximumTrackTintColor={colors.additionalColors.solidPink}
      />
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
  conditionNumber: {marginTop: 20, ...regularFontStyles.size34},
  condition: {...boldFontStyles.size24},
});
