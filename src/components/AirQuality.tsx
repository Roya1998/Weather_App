import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {colors} from '../theme/colors';
import {boldFontStyles, regularFontStyles} from '../theme/typography';
import RightArrow from '../../src/assets/vectors/rightArrow.svg';

export const AirQuality = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>AIR QUALITY</Text>
      <Text style={styles.riskText}>3-Low Health Risk</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={20}
        minimumTrackTintColor={colors.linearBlue.secondary}
        maximumTrackTintColor={colors.additionalColors.solidPink}
      />
      <View style={styles.linkView}>
        <Text style={styles.linkText}>See more</Text>
        <Pressable hitSlop={50}>
          <RightArrow style={styles.rightArrow} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: colors.linearPurple.primary,
    borderRadius: 22,
    padding: 20,
  },
  slider: {
    width: '100%',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: colors.light.quanternary,
    paddingBottom: 10,
    marginTop: 15,
  },
  text: {
    ...boldFontStyles.size16,
    color: colors.light.secondary,
  },
  linkText: {
    color: colors.light.primary,
  },
  iconView: {
    display: 'flex',
    flexDirection: 'row',
    height: 24,
  },
  icon: {color: colors.light.secondary},
  riskText: {
    marginTop: 20,
    ...boldFontStyles.size24,
  },
  linkText: {
    ...regularFontStyles.size22,
    marginTop: 20,
  },
  linkView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  rightArrow: {color: colors.light.secondary},
});
