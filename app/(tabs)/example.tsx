import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { NeonText } from '../../components/NeonText';
import { NeonButton } from '../../components/NeonButton';
import { ThemedView } from '../../components/ThemedView';

export default function TestSpaceXScreen() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <NeonText style={styles.title}>SpaceX Theme Test</NeonText>
      <NeonText>Count: {count}</NeonText>
      <NeonButton title="Increase" onPress={() => setCount(count + 1)} />
      <NeonButton title="Decrease" onPress={() => setCount(count - 1)} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
