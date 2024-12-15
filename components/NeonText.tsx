import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

export function NeonText({ children, style }) {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.text,
        {
          color: theme.colors.accent,
          fontFamily: theme.fonts.main,
          textShadowColor: theme.glow.shadowColor,
          textShadowOffset: theme.glow.shadowOffset,
          textShadowRadius: theme.glow.shadowRadius,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
