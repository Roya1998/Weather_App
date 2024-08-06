import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {NavBar} from '../../components/NavBar';
import {colors} from '../../../src/theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card} from '../../../src/components/Card';
import {weatherData} from '../../utils/Dummy Data/weatherData';

export const WeatherScreen = ({navigation}) => {
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
          {weatherData.map((item, index) => {
            return (
              <Card
                key={item.city + index}
                temperature={item.temperature}
                high={item.high}
                low={item.low}
                city={item.city}
                country={item.country}
                condition={item.condition}
                type={item.type}
              />
            );
          })}
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
});
