import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Orbitron_400Regular } from '@expo-google-fonts/orbitron';

import { useColorScheme } from '@/hooks/useColorScheme';
import theme from '../theme'; // Import your theme object

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Orbitron: Orbitron_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StyledThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.accent,
            headerTitleStyle: { fontFamily: theme.fonts.main, fontSize: 20 },
          }}
        >
          {/* Tabs Navigator */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          {/* Add Exercise Screen */}
          <Stack.Screen
            name="screens/add-exercise"
            options={{
              title: 'Add Exercise',
              presentation: 'modal', // Optional modal-style screen
            }}
          />

          {/* Not Found Screen */}
          <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
        <StatusBar style="auto" />
      </StyledThemeProvider>
    </NavigationThemeProvider>
  );
}
