import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Screen/Login/Login';
import NavigationName from './NavigationName';
import Dashboard from '../Screen/Dashboard/Dashboard';
import NewOrderScreen from '../Screen/NewOrder/NewOrder';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={NavigationName.LOGIN} component={Login} />
      <MainStack.Screen name={NavigationName.DASHBOARD} component={Dashboard} />
      <MainStack.Screen
        name={NavigationName.NEWORDER}
        component={NewOrderScreen}
      />
    </MainStack.Navigator>
  );
}
