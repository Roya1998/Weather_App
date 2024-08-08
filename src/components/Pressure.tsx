import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {boldFontStyles, regularFontStyles} from '../theme/typography';
import {colors} from '../theme/colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export const Pressure = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>PRESSURE</Text>
      <View style={styles.progressView}>
        <Text style={styles.pressureDegree}>1010hPa</Text>
        <AnimatedCircularProgress
          size={120}
          width={10}
          fill={100}
          tintColor={colors.light.secondary}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="none"
        />
      </View>
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
    justifyContent: 'space-between',
  },
  label: {
    ...boldFontStyles.size16,
    color: colors.light.secondary,
  },
  progressView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressureDegree: {
    ...regularFontStyles.size20,
    top: 70,
  },
});
