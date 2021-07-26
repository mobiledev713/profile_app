import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const Constants = {
  Layout: {
    Width: width,
    Height: height,
  },
  Colors: {
    Azure: '#0080FF',
    Ferrari: '#FF2800',
    Azure01: 'rgba(0, 128, 255, 0.1)',
    Ferrari01: 'rgba(255, 40, 0, 0.1)',
  },
};

export default Constants;
