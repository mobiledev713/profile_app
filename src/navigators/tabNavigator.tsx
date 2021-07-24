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
import Constants from '../const';

const Tab = createBottomTabNavigator();

function TabBar(props: BottomTabBarProps<BottomTabBarOptions>): JSX.Element {
  const { state, descriptors, navigation } = props;
  return (
    <View
      style={{
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
      }}
    >
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
