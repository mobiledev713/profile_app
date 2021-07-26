import React from 'react';
import { View, ScrollView, Image, SafeAreaView } from 'react-native';

import styles from './styles';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView />
        <View style={styles.content}>
          <Image style={styles.image} source={{}} />
        </View>
      </ScrollView>
    </View>
  );
}
