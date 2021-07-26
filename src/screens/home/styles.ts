import { StyleSheet } from 'react-native';

import Constants from '../../const';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Constants.Colors.Azure01,
  },
  content: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: Constants.Layout.Width * 0.9 * 0.8,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 20,
  },
});

export default styles;
