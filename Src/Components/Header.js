import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import * as Theme from '../Utils/Theme';
import AppImages from '../Assets/Images/Images';
import {COLORS} from '../Utils/colors';
// import { FONTS } from '../utils/fonts';

export function Header({
  label,
  onPress,
  isClosebtn,
  isPlaceOrderBtn,
  orderValue,
  style,
}) {
  return (
    <View style={styles.topView}>
      <Text style={[styles.label, style]}>{label}</Text>
      {isClosebtn ? (
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.close} source={AppImages.ICClose} />
        </TouchableOpacity>
      ) : null}
      {isPlaceOrderBtn ? (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              backgroundColor: COLORS.orange,
              margin: Theme.SPACING / 2,
              padding: Theme.SPACING / 1.5,
              borderRadius: Theme.SPACING / 2,
              color: COLORS.white,
            }}>
            Place Order ${orderValue}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: Theme.SPACING,
    marginTop: Theme.SPACING * 2,
  },
  label: {
    color: 'black',
    fontSize: Theme.FONT_24PX,
    // fontFamily: FONTS.ROBOTO_MEDIUM,
    marginLeft: Theme.SPACING,
  },
  close: {
    marginRight: Theme.SPACING * 3,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
