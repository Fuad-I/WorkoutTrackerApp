import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

export function NeonButton({ title, onPress }) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.border,
          borderColor: theme.colors.accent,
          shadowColor: theme.glow.shadowColor,
        },
      ]}
    >
      <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.main }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    marginVertical: 10,
  },
});
