import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { Home, Info } from '../screens';
import Constants from '../const';

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name="person-circle"
                size={size}
                color={focused ? Constants.Colors.Azure : 'gray'}
              />
            );
          }
          if (route.name === 'Info') {
            return (
              <FontAwesome5
                name="info-circle"
                size={size}
                color={focused ? Constants.Colors.Ferrari : 'gray'}
              />
            );
          }
          return (
            <Ionicons
              name="person-circle"
              size={size}
              color={focused ? Constants.Colors.Azure : 'gray'}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {},
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
}
