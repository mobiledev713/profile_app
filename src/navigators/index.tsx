import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './tabNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
