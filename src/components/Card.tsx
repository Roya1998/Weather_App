import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import MidRain from '../assets/vectors/midRain.svg';
import FastWind from '../assets/vectors/fastWind.svg';
import Showers from '../assets/vectors/showers.svg';
import Tornado from '../assets/vectors/tornado.svg';
import PartlyCloudy from '../assets/vectors/partlyCloudy.svg';
import Sunny from '../components/Sunny';
import {SvgProps} from 'react-native-svg';
import CardBackrground from '../assets/images/cardBackrground.png';
import {colors} from '../theme/colors';
import {regularFontStyles} from '../theme/typography';
import {boldFontStyles} from '../theme/typography';
import {useState} from 'react';
import {ImageComponent} from 'react-native';

const weatherImages = {
  'light rain': MidRain,
  'moderate rain': MidRain,
  'patchy rain nearby': MidRain,
  'patch rain possible': MidRain,
  'patchy light drizzle': MidRain,
  'light drizzle': MidRain,
  'patch light rain': MidRain,
  'moderate rain at times': MidRain,
  'heavy rain at times': Showers,
  'light sleet showers': Showers,
  'torrential rain shower': Showers,
  'moderate or heavy rain shower': Showers,
  'light rain shower': Showers,
  sunny: Sunny,
  'partly cloudy shower': Showers,
  'partly cloudy': PartlyCloudy,
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

  console.log(type);

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/cardBackground.png')}
      />
      <View style={styles.details}>
        <View style={styles.topLine}>
          <Text style={styles.temperature}>{temperature}˚</Text>
          <View style={styles.conditionImage}>
            {ImageComponent ? <ImageComponent /> : <></>}
          </View>
        </View>
      </View>
      <View style={styles.bottomLine}>
        <Text style={styles.city}>
          {city}, {country}
        </Text>
        <View style={styles.conditionContainer}>
          <Text style={styles.weatherCondition}>{condition}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
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

  city: {
    ...regularFontStyles.size18,
    width: '70%',
  },
  weatherCondition: {
    ...regularFontStyles.size16,
  },
  conditionContainer: {
    height: 100,
    width: '30%',
    display: 'flex',
    alignItems: 'center',
  },
  bottomLine: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 45,
    marginTop: 10,
    paddingHorizontal: 35,
  },

  conditionImage: {
    height: 160,
    width: 150,
  },
});
