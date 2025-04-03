import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Theme from '../Utils/Theme';
// import { FONTS } from '../utils/fonts';

export function TextButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Theme.width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Theme.SPACING * 1.5,
    borderRadius: Theme.SPACING / 2,
    margin: Theme.SPACING,
  },
  text: {
    color: 'white',
    // fontFamily: FONTS.ROBOTO_MEDIUM,
    fontSize: Theme.FONT_16PX,
    alignSelf: 'center',
  },
});
