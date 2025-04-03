import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  TextInput,
} from 'react-native';

import {TextButton} from '../../Components/TextButton';

import {COLORS} from '../../Utils/colors';
import {FONTS} from '../../Utils/fonts';
import * as Theme from '../../Utils/Theme';
import AppImages from '../../Assets/Images/Images';
import {Header} from '../../Components/Header';
import styles from './styles';
import NavigationName from '../../Navigation/NavigationName';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const btnLoginTap = () => {
    navigation.navigate(NavigationName.DASHBOARD);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : Theme.SPACING * 2}
        enabled={Platform.OS !== 'ios'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.main}>
            <View style={styles.container}>
              <Header
                label="Welcome!!"
                onPress={() => navigation.navigate('Home')}
              />

              <View style={styles.viewEmailID}>
                <TextInput
                  style={styles.textInputStyle}
                  // fontFamily={FONTS.ROBOTO_REGULAR}
                  fontSize={Theme.FONT_18PX}
                  selectionColor={COLORS.black}
                  underlineColor={COLORS.orange}
                  placeholder="Email ID"
                  label="Email ID"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  theme={{
                    colors: {
                      text: COLORS.black,
                      primary: COLORS.orange,
                      placeholder: COLORS.black,
                    },
                  }}
                  placeholderTextColor={COLORS.black}
                />
              </View>
              <View style={styles.viewPassword}>
                <TextInput
                  secureTextEntry={isPasswordSecure}
                  style={styles.textInputStyle}
                  // fontFamily={FONTS.ROBOTO_REGULAR}
                  fontSize={Theme.FONT_18PX}
                  selectionColor={COLORS.orange}
                  underlineColor={COLORS.orange}
                  placeholder="Password"
                  placeholderTextColor={COLORS.black}
                  label="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  theme={{
                    colors: {
                      text: COLORS.black,
                      primary: COLORS.orange,
                      placeholder: COLORS.black,
                    },
                  }}
                />
              </View>
              <View style={styles.viewLoginButton}>
                <TextButton
                  style={styles.textButtonStyle}
                  title="Login"
                  onPress={btnLoginTap}
                />
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.fingerPrintView}>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={styles.fingerPrint}
                    source={AppImages.ICFingerPrint}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
