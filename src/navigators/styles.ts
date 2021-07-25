import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
  },
});

export default styles;
