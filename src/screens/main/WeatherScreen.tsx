import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageComponent,
} from 'react-native';
import {NavBar} from '../../components/NavBar';
import {colors} from '../../../src/theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card} from '../../../src/components/Card';
import {useState, useEffect} from 'react';
import {regularFontStyles} from '../../theme/typography';

async function getData() {
  try {
    const responseLondon = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=Baku&aqi=no',
    );
    const responseBaku = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=London&aqi=no',
    );
    const responseMoscow = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=Moscow&aqi=no',
    );
    const responseParis = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=California&aqi=no',
    );
    const responseNewYork = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=New-York&aqi=no',
    );
    const responseCapeTown = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=Cape-Townk&aqi=no',
    );
    const responseOslo = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=86bca295f2d949a8b35185331240609&q=Oslo&aqi=no',
    );
    const londonData = await responseLondon.json();
    const bakuData = await responseBaku.json();
    const moscowData = await responseMoscow.json();
    const parisData = await responseParis.json();
    const newYorkData = await responseNewYork.json();
    const capeTownData = await responseCapeTown.json();
    const osloData = await responseOslo.json();
    return [
      londonData,
      bakuData,
      moscowData,
      parisData,
      newYorkData,
      capeTownData,
      osloData,
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const WeatherScreen = ({navigation}) => {
  const [weatherData, setWeatherData] = useState([]);

  async function getCityData() {
    const data = await getData();
    setWeatherData(data);
  }

  useEffect(() => {
    getCityData();
  }, []);

  console.log(weatherData);
  return (
    <LinearGradient
      colors={[
        colors.linearBlack.secondary,
        colors.additionalColors.solidPurple,
      ]}
      style={{
        flex: 1,
      }}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <View style={styles.mainView}>
        <SafeAreaView style={styles.safeArea} edges={'top'}>
          <NavBar navigation={navigation}></NavBar>
        </SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 190,
            gap: 15,
          }}>
          {weatherData.map(data => {
            return data ? (
              <Card
                key={data?.location?.name}
                temperature={data?.current?.temp_c}
                high={null}
                low={null}
                city={data?.location?.name}
                country={data?.location?.country}
                condition={data?.current?.condition.text}
                type={data?.current.condition?.text?.toLowerCase()}
              />
            ) : null;
          })}
          {weatherData.length === 0 && (
            <Text style={styles.loadingText}>Loading weather data....</Text>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  safeArea: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  loadingText: {...regularFontStyles.size28, color: colors.light.secondary},
});
