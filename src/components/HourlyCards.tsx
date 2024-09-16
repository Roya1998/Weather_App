import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavBar} from './NavBar';
import {regularFontStyles} from '../../src/theme/typography';
import SmallWindy from '../../src/assets/vectors/smallWindy.svg';
import SmallShowers from '../../src/assets/vectors/smallShowers.svg';
import SmallSunnyRain from '../../src/assets/vectors/smallSunnyRainy.svg';
import SmallTornado from '../../src/assets/vectors/smallTornado.svg';
import SmallRainy from '../../src/assets/vectors/smallRainy.svg';
import {colors} from '../../src/theme/colors';
import {faker} from '@faker-js/faker';
const smallWeatherImages = {
  windy: SmallWindy,
  showers: SmallShowers,
  tornado: SmallTornado,
  sunnyRainy: SmallSunnyRain,
  rainy: SmallRainy,
};

export const HourlyCards = ({hour, type = 'windy', temperature}) => {
  const ImageComponent: SvgProps = smallWeatherImages[type];

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.clock}>{hour}</Text>
      <ImageComponent></ImageComponent>
      <Text style={styles.temperature}>{temperature}˚</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 60,
    height: 146,
    zIndex: 1,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.linearPurple.primary,
    backgroundColor: colors.additionalColors.solidPurple,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 15,
    padding: 4,
    margin: 8,
  },
  clock: {
    ...regularFontStyles.size15,
  },
  temperature: {...regularFontStyles.size18},
});
