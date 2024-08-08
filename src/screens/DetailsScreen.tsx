import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {HourlyCards} from '../components/HourlyCards';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../src/theme/colors';
import LeftArrow from '../../src/assets/vectors/leftArrow.svg';
import {regularFontStyles, boldFontStyles} from '../../src/theme/typography';
import {Pressable} from 'react-native';
import {AirQuality} from '../components/AirQuality';
import {MontrealHourly} from '../utils/Dummy Data/MontrealHourlyData';
import {UVIndex} from '../components/UVIndex';
import {Sunrise} from '../components/Sunrise';
import {Wind} from '../components/Wind';
import {Rainfall} from '../components/Rainfall';
import {Feelslike} from '../components/Feelslike';
import {Humidity} from '../components/Humidity';
import {Visibility} from '../components/Visibility';
import {Pressure} from '../components/Pressure';

export const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} edges={'top'}>
        <View style={styles.navBarView}>
          <Pressable hitSlop={50}>
            <LeftArrow
              style={styles.leftArrow}
              onPress={() => navigation.navigate('Main')}
            />
          </Pressable>
          <View style={styles.headline}>
            <Text style={styles.city}> Montreal</Text>
            <Text style={styles.tempAndCond}>19˚|Mostly Clear</Text>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardBackground}>
          <View style={styles.lineView}>
            <Pressable>
              <Text style={styles.text}>Hourly Forecast</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.text}>Weekly Forecast</Text>
            </Pressable>
          </View>
          <ScrollView horizontal style={styles.horizontalScroll}>
            {MontrealHourly.map((item, index) => {
              return (
                <HourlyCards
                  key={item.hour + index}
                  hour={item.hour}
                  type={item.type}
                  temperature={item.temperature}></HourlyCards>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.detailsView}>
          <AirQuality />
          <View style={styles.paralelCards}>
            <UVIndex />
            <Sunrise />
          </View>
          <View style={styles.paralelCards}>
            <Wind />
            <Rainfall />
          </View>
          <View style={styles.paralelCards}>
            <Feelslike />
            <Humidity />
          </View>
          <View style={styles.paralelCards}>
            <Visibility />
            <Pressure />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.simplePurple.purple,
  },
  cardBackground: {
    flex: 1,
    backgroundColor: colors.simplePurple.purple,
    borderRadius: 44,
    marginBottom: 10,
  },

  navBarView: {
    backgroundColor: colors.simplePurple.purple,
    paddingTop: 60,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: colors.linearPurple.primary,
  },
  safeAreaView: {
    backgroundColor: colors.simplePurple.purple,
    height: 180,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  leftArrow: {
    color: colors.light.secondary,
  },
  headline: {
    display: 'flex',
    alignItems: 'center',
  },
  city: {
    ...regularFontStyles.size34,
  },
  tempAndCond: {
    ...regularFontStyles.size20,
    color: colors.light.secondary,
  },
  lineView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    ...boldFontStyles.size16,
    color: colors.light.secondary,
    paddingBottom: 10,
  },
  horizontalScroll: {
    borderTopWidth: 1,
    borderTopColor: colors.light.tertiary,
    paddingTop: 20,
  },
  detailsView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  paralelCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
