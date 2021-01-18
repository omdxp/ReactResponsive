import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {homeStyles} from '../styles';
import {listenOrientationChange} from 'react-native-responsive-screen';

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.responsiveBox}>
        <Text style={homeStyles.text}>
          This box is always of 84.5% width and 17% height.
        </Text>
      </View>
    </View>
  );
}
