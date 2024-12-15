import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ExerciseList from '../../components/ExerciseList';
import ChooseExerciseModal from '../../components/ChooseExerciseModal';
import AddSetsModal from '../../components/AddSetsModal';
import { ThemedText } from '../../components/ThemedText';

export default function WorkoutSessionScreen() {
  const [workouts, setWorkouts] = useState([]);
  const [chooseExerciseVisible, setChooseExerciseVisible] = useState(false);
  const [addSetsVisible, setAddSetsVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const openChooseExerciseModal = () => setChooseExerciseVisible(true);
  const closeChooseExerciseModal = () => setChooseExerciseVisible(false);

  const openAddSetsModal = (exercise) => {
    setSelectedExercise(exercise);
    setAddSetsVisible(true);
  };
  const closeAddSetsModal = () => setAddSetsVisible(false);

  const addWorkout = (exercise, sets) => {
    setWorkouts([...workouts, { id: Date.now().toString(), name: exercise, sets }]);
    closeAddSetsModal();
  };

  return (
    <View style={styles.container}>
      {/* Date Display */}
      <ThemedText style={styles.date}>{getCurrentDate()}</ThemedText>

      {/* List of Exercises */}
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ExerciseList
            exercise={item}
            style={[styles.exerciseItem, index === 0 && styles.firstItem]}
          />
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={openChooseExerciseModal}>
        <Ionicons name="add-circle" size={70} color="#00FFFF" />
      </TouchableOpacity>

      {/* Modals */}
      <ChooseExerciseModal
        visible={chooseExerciseVisible}
        onClose={closeChooseExerciseModal}
        onExerciseSelect={openAddSetsModal}
      />
      <AddSetsModal
        visible={addSetsVisible}
        exercise={selectedExercise}
        onClose={closeAddSetsModal}
        onSave={addWorkout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00FFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  exerciseItem: {
    marginBottom: 10,
  },
  firstItem: {
    marginTop: 30,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
