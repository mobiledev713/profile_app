import React from 'react';
import { View } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { Home, Info } from '../screens';
import styles from './styles';
import Constants from '../const';

const Tab = createBottomTabNavigator();

function TabBar(props: BottomTabBarProps<BottomTabBarOptions>): JSX.Element {
  const { state, descriptors, navigation } = props;
  return (
    <View style={styles.tabBarStyle}>
      <BottomTabBar
        state={state}
        descriptors={descriptors}
        navigation={navigation}
        showLabel={false}
        style={{
          borderRadius: 20,
        }}
        safeAreaInsets={{
          bottom: 10,
        }}
      />
    </View>
  );
}

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
      tabBar={props => (
        <TabBar
          state={props.state}
          descriptors={props.descriptors}
          navigation={props.navigation}
        />
      )}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
}
