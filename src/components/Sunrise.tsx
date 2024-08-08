import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {colors} from '../theme/colors';
import {boldFontStyles, regularFontStyles} from '../theme/typography';

export const Sunrise = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>SUNRISE</Text>
      <Text style={styles.hour}>5:28 AM</Text>
      <Slider
        maximumValue={11}
        minimumValue={0}
        minimumTrackTintColor={colors.linearBlue.secondary}
        maximumTrackTintColor={colors.additionalColors.solidPink}
      />
      <Text style={styles.sunSet}>Sunset 7:25 PM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: colors.linearPurple.primary,
    borderRadius: 22,
    padding: 15,
    gap: 10,
    width: '48%',
  },
  label: {...boldFontStyles.size16, color: colors.light.secondary},
  hour: {...regularFontStyles.size34},
  sunSet: {...regularFontStyles.size13},
});
