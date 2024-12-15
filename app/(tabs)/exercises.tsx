import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function ExercisesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exercise History Screen</Text>
      <Text style={{ fontFamily: 'Orbitron', fontSize: 20, color: '#00FFFF' }}>
  	Custom Font
    </Text>
    <Text style={{ fontFamily: 'System', fontSize: 20, color: '#FFF' }}>
      Default Font
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
