import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import MidRain from '../assets/vectors/midRain.svg';
import FastWind from '../assets/vectors/fastWind.svg';
import Showers from '../assets/vectors/showers.svg';
import Tornado from '../assets/vectors/tornado.svg';
import PartlyCloudy from '../assets/vectors/partlyCloudy.svg';
import {SvgProps} from 'react-native-svg';
import CardBackrground from '../assets/images/cardBackrground.png';
import {colors} from '../theme/colors';
import {regularFontStyles} from '../theme/typography';
import {boldFontStyles} from '../theme/typography';

const weatherImages = {
  rainy: MidRain,
  windy: FastWind,
  showering: Showers,
  tornado: Tornado,
  cloudy: PartlyCloudy,
};

export const Card = ({
  temperature,
  high,
  low,
  city,
  country,
  condition,
  type = 'rainy',
}) => {
  const ImageComponent: SvgProps = weatherImages[type];

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/cardBackground.png')}
      />
      <View style={styles.details}>
        <View style={styles.topLine}>
          <Text style={styles.temperature}>{temperature}˚</Text>

          <ImageComponent></ImageComponent>
        </View>
        <View style={styles.maximumMinimumTemp}>
          <Text style={styles.maxMinTemp}>H:{high}˚</Text>
          <Text style={styles.maxMinTemp}>L:{low}˚</Text>
        </View>
      </View>
      <View style={styles.bottomLine}>
        <Text style={styles.city}>
          {city}, {country}
        </Text>
        <Text style={styles.weatherCondition}>{condition}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
  },
  details: {
    paddingHorizontal: 20,
  },
  topLine: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 35,
    width: '100%',
    justifyContent: 'space-between',
  },
  temperature: {
    ...regularFontStyles.size64,
    top: 70,
    left: 15,
  },
  maximumMinimumTemp: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 45,
    left: 15,
  },
  maxMinTemp: {
    ...regularFontStyles.size16,
    color: colors.light.secondary,
  },
  city: {
    ...regularFontStyles.size18,
  },
  weatherCondition: {
    ...regularFontStyles.size16,
  },
  bottomLine: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 45,
    paddingHorizontal: 35,
  },
});
