import React from 'react';
import { View, ScrollView, Image, SafeAreaView } from 'react-native';

import styles from './styles';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView />
      </ScrollView>
    </View>
  );
}
