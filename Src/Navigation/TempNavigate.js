import {StackActions} from '@react-navigation/routers';
import * as React from 'react';
import {CommonActions} from '@react-navigation/native';
import NavigationName from './NavigationName';

export const navigationRef = React.createRef();

export function getCurrentRoute() {
  const navigationState = navigationRef.current.getRootState();
  const currentRoute = navigationState.routes[navigationState.index];
  return currentRoute.name;
}
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function replace(name, params) {
  navigationRef.current.dispatch(StackActions.replace(name, params));
}

export function push(name, params) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.push(name, params));
}
export function dispatchToMobileScreen() {
  // navigationRef.current &&
  //   navigationRef.current.dispatch(
  //     CommonActions.reset({
  //       index: 1,
  //       routes: [
  //         {
  //           name: NavigationName.MOBILE_NUMBER,
  //         },
  //       ],
  //     }),
  //   );
}
