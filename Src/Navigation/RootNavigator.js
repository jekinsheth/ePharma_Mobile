import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {navigationRef} from './TempNavigate';
import {MainStackNavigator} from './MainStackNavigator';

const RootNavigator = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;
