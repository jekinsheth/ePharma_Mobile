import {StyleSheet} from 'react-native';

import * as Theme from '../../Utils/Theme';
import {COLORS} from '../../Utils/colors';

const styles = StyleSheet.create({
  main: {
    height: Theme.height,
    width: Theme.width,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  viewEmailID: {
    marginTop: Theme.SPACING,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    margin: Theme.SPACING * 2,
  },
  textInputStyle: {
    // color: COLORS.orange,
    backgroundColor: COLORS.white,
    flex: 1,
    fontSize: Theme.FONT_18PX,
    borderBottomWidth: 1,
    borderColor: COLORS.orange,
    padding: Theme.SPACING,
    borderRadius: Theme.SPACING,
  },
  textButtonStyle: {
    backgroundColor: COLORS.lightBlack,
    color: COLORS.white,
  },
  viewLoginButton: {
    marginTop: Theme.SPACING * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Theme.SPACING / 2,
  },
  viewPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Theme.SPACING / 2,
    marginStart: Theme.SPACING * 2,
    marginEnd: Theme.SPACING * 2,
  },
  bottomview: {
    //width: Theme.width,
    //height: Theme.height * 0.2,
    //position: 'absolute',
    //bottom: 0,
    //marginTop: Theme.SPACING,
    width: Theme.width,
    bottom: 50,
    position: 'absolute',
    justifyContent: 'center',
    padding: Theme.SPACING * 2,
  },
  viewBottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: Theme.SPACING,
    backgroundColor: COLORS.offGrey,
    padding: Theme.SPACING / 2,
  },
  viewBottomRegisterView: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: Theme.SPACING,
  },
  forgotPassword: {
    color: COLORS.orange,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Theme.FONT_16PX,
    margin: Theme.SPACING,
  },
  orContinue: {
    fontSize: Theme.FONT_14PX,
    margin: Theme.SPACING,
    textAlign: 'center',
    color: COLORS.dullGrey,
  },
  fingerPrintView: {
    alignSelf: 'center',
    padding: Theme.SPACING,
    borderRadius: Theme.SPACING * 3,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  fingerPrint: {
    width: Theme.ICON_SIZE * 1.5,
    height: Theme.ICON_SIZE * 1.5,
    alignSelf: 'center',
    justifyContent: 'center', //Centered vertically
  },
  smartphone: {
    width: Theme.ICON_SIZE,
    height: Theme.ICON_SIZE * 0.9,
  },
  otp: {
    marginLeft: Theme.SPACING / 2,
    marginRight: Theme.SPACING / 2,
    fontSize: Theme.FONT_14PX,
  },
  register: {
    color: COLORS.orange,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Theme.FONT_16PX,
    alignSelf: 'flex-start',
    marginLeft: Theme.SPACING / 2,
  },
  newUser: {
    alignSelf: 'flex-end',
    fontSize: Theme.FONT_16PX,
    color: COLORS.dullGrey,
  },
  itemContainer: {
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  itemCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 15,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  itemText: {
    fontSize: 14,
    color: COLORS.black,
  },
  itemButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: COLORS.red,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default styles;
