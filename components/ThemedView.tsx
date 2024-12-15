import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

export function ThemedView({ style, ...props }) {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
          flex: 1, // Ensures it fills the entire screen
        },
        style,
      ]}
      {...props}
    />
  );
}
