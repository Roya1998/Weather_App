import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {colors} from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import SearchSvg from '../assets/vectors/search.svg';
import LeftArrow from '../assets/vectors/leftArrow.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import RightAccess from '../assets/vectors/rightAccess.svg';
import {BlurView} from '@react-native-community/blur';
import DropShadow from 'react-native-drop-shadow';
import {regularFontStyles} from '../theme/typography';

export const NavBar = ({navigation}) => {
  return (
    <BlurView blurRadius={8} blurAmount={8} blurType="dark">
      <SafeAreaView style={styles.mainView}>
        <View style={styles.navBar}>
          <View style={styles.navigatorView}>
            <View style={styles.leftSideNavigator}>
              <Pressable onPress={() => navigation.goBack()}>
                <LeftArrow style={styles.leftArrow}></LeftArrow>
              </Pressable>
              <Text style={styles.text}>Weather</Text>
            </View>
            <Pressable>
              <RightAccess></RightAccess>
            </Pressable>
          </View>
          <View style={styles.inputContainer}>
            <SearchSvg style={styles.searchSvg} />
            <TextInput
              style={styles.input}
              placeholder="Search for a city or airport"
              placeholderTextColor={colors.light.secondary}></TextInput>
          </View>
        </View>
      </SafeAreaView>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 155,
  },
  navBar: {
    marginTop: 10,
  },
  input: {
    height: 36,
    paddingHorizontal: 30,
    marginLeft: 5,
    color: '#fff',
  },
  searchSvg: {
    position: 'absolute',
    left: 10,
    color: colors.light.secondary,
  },
  inputContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5936B4',
  },

  navigatorView: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    ...regularFontStyles.size28,
    marginLeft: 10,
  },
  leftArrow: {
    color: colors.light.secondary,
  },
  leftSideNavigator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
