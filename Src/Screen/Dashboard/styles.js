import {StyleSheet} from 'react-native';

import * as Theme from '../../Utils/Theme';
import {COLORS} from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.SPACING,
    backgroundColor: COLORS.offGrey,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Theme.SPACING,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: Theme.SPACING,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: Theme.FONT_16PX,
    fontWeight: 'bold',
    color: COLORS.orange,
  },
  cardValue: {
    fontSize: Theme.FONT_20PX,
    color: COLORS.blue,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: Theme.FONT_16PX,
    fontWeight: 'bold',
    marginBottom: Theme.SPACING,
    color: COLORS.orange,
  },
  orderItem: {
    backgroundColor: COLORS.white,
    padding: Theme.SPACING,
    borderRadius: 8,
    marginBottom: Theme.SPACING,
    elevation: 2,
  },
  orderText: {
    fontSize: Theme.FONT_16PX,
  },
  orderDetails: {
    fontSize: Theme.FONT_16PX,
    color: COLORS.darkGrey,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: COLORS.orange,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: Theme.FONT_32PX,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default styles;
