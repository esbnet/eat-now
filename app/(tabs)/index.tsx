import { StyleSheet } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome5';

import React from 'react';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="cat" color={'#ffff00'} size={150} />
      <Text style={styles.title}>eat now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
