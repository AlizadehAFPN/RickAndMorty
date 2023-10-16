import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  image: {height: 100, width: 100},
  detailScreenPadding: {padding: 16},
  rowDetailScreen: {justifyContent: 'space-between'},
  imgDetailScreen: {width: '50%', height: 200},
  txtDetailScreen: {marginVertical: 8},
  backToTop: {
    position: 'absolute',
    bottom: 50,
    right: 16,
    padding: 16,
    backgroundColor: '#CC0000',
    borderRadius: 16,
  },
});
