import React, { useState } from 'react';
import { View, Modal, FlatList, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

const exercises = ['Bench Press', 'Squat', 'Deadlift', 'Pull-Ups', 'Push-Ups'];

export default function AddExerciseModal({ visible, onClose, onSave }) {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [sets, setSets] = useState([]);
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const addSet = () => {
    if (!reps || !weight) {
      alert('Please fill in both fields.');
      return;
    }
    setSets([...sets, { reps, weight }]);
    setReps('');
    setWeight('');
  };

  const saveExercise = () => {
    if (!selectedExercise) {
      alert('Please select an exercise.');
      return;
    }
    onSave({ name: selectedExercise, sets });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ThemedText style={styles.header}>Add Exercise</ThemedText>
          <FlatList
            data={exercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedExercise(item)}>
                <ThemedText style={styles.exerciseName}>
                  {item} {selectedExercise === item ? '(Selected)' : ''}
                </ThemedText>
              </TouchableOpacity>
            )}
          />
          <TextInput
            style={styles.input}
            placeholder="Reps"
            keyboardType="numeric"
            value={reps}
            onChangeText={setReps}
          />
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <Button title="Add Set" onPress={addSet} />
          <Button title="Save Exercise" onPress={saveExercise} />
          <Button title="Close" onPress={onClose} color="#FF0000" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    margin: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00FFFF',
    borderRadius: 5,
    backgroundColor: '#121212',
    color: '#FFF',
    padding: 10,
    marginBottom: 10,
  },
});
