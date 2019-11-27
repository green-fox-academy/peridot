import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
    marginRight: 30,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  iconFont: {
    paddingLeft: 10,
    paddingRight: 0,
    marginRight: 0,
  },
});
