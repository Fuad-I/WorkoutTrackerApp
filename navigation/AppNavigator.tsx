import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutSessionScreen from '../app/tabs/workout-session';
import AddExerciseScreen from '../screens/add-exercise';

export type RootStackParamList = {
  WorkoutSession: undefined;
  AddExercise: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Workout Session Screen */}
        <Stack.Screen
          name="WorkoutSession"
          component={WorkoutSessionScreen}
          options={{
            title: "Workout Session",
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#00FFFF',
            headerTitleStyle: { fontFamily: 'Orbitron', fontSize: 20 },
          }}
        />

        {/* Add Exercise Screen */}
        <Stack.Screen
          name="AddExercise"
          component={AddExerciseScreen}
          options={{
            title: "Add Exercise",
            presentation: 'modal', // Optional modal style
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#00FFFF',
            headerTitleStyle: { fontFamily: 'Orbitron', fontSize: 20 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
