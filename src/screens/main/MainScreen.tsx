import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import Map from '../../assets/vectors/map.svg';
import List from '../../assets/vectors/list.svg';
import {Image} from 'react-native';
import {boldFontStyles, regularFontStyles} from '../../../src/theme/typography';
import {MontrealHourly} from '../../utils/Dummy Data/MontrealHourlyData';
import {HourlyCards} from '../../components/HourlyCards';
import {colors} from '../../theme/colors';
import {BlurView} from '@react-native-community/blur';

export const MainScreen = ({navigation}) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = () => {
    fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=Baku&aqi=no',
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`Http error!': ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(error => {
        console.log('Data is not found', error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/images/mountainImage.png')}
      style={styles.mountainImage}>
      <ImageBackground
        resizeMode="contain"
        source={require('../../assets/images/house.png')}
        style={styles.houseImage}></ImageBackground>
      <SafeAreaView style={styles.safeAreaView}>
        {weatherData ? (
          <View style={styles.textView}>
            <Text style={styles.cityName}>{weatherData.location.name}</Text>
            <Text style={styles.temperature}>
              {weatherData.current.temp_c}˚
            </Text>
            <Text style={styles.condition}>
              {weatherData.current.condition.text}
            </Text>
          </View>
        ) : (
          <Text> Loading weather data</Text>
        )}
        <BlurView blurType="dark" style={styles.blurView}>
          <View style={styles.lineView}>
            <Pressable>
              <Text style={styles.text}>Hourly Forecast</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            style={styles.horizontalScroll}
            showsHorizontalScrollIndicator={false}>
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
        </BlurView>
        <View style={styles.tabBarView}>
          <View style={styles.tabBarBackgroundView}>
            <Image
              source={require('../../assets/images/rectangle.png')}
              style={styles.rectangle}
            />
            <Image
              source={require('../../assets/images/curve.png')}
              style={styles.curve}
              resizeMode="contain"
            />
          </View>
          <View style={styles.buttonView}>
            <Pressable>{<Map />}</Pressable>
            <Pressable onPress={() => navigation.navigate('Details')}>
              <Image source={require('../../assets/images/button.png')} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Weather')}>
              {<List />}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    borderWidth: 1,
  },
  mountainImage: {
    height: '100%',
    width: '100%',
  },
  houseImage: {
    width: '100%',
    height: 390,
    position: 'absolute',
    bottom: 100,
  },
  textView: {
    alignItems: 'center',
    top: 70,
  },
  cityName: {
    ...regularFontStyles.size41,
  },
  temperature: {...regularFontStyles.size96},
  condition: {...boldFontStyles.size24, color: colors.light.secondary},
  highLow: {
    ...boldFontStyles.size24,
  },
  tabBarView: {
    width: '100%',
    bottom: 0,

    position: 'absolute',
    alignItems: 'center',
  },
  tabBarBackgroundView: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    height: 100,
    alignItems: 'center',
  },
  rectangle: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 0,
    bottom: 0,
  },
  curve: {
    zIndex: 1,
    minWidth: '100%',
  },
  buttonView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  blurView: {
    top: 230,
    borderRadius: 44,
    borderWidth: 1,
    borderColor: colors.light.tertiary,
    padding: 10,
    height: 325,
  },
  lineView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  horizontalScroll: {
    borderTopWidth: 1,
    borderTopColor: colors.light.tertiary,
    paddingTop: 20,
  },
  text: {
    ...boldFontStyles.size16,
    color: colors.light.secondary,
    paddingBottom: 10,
  },
});
