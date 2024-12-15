import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Button, Modal, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

export default function AddSetsModal({ visible, exercise, onClose, onSave }) {
  const [sets, setSets] = useState([]);
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const addSet = () => {
    if (!reps || !weight) {
      alert('Please enter reps and weight.');
      return;
    }
    setSets([...sets, { reps, weight }]);
    setReps('');
    setWeight('');
  };

  const saveExercise = () => {
    if (sets.length === 0) {
      alert('Please add at least one set.');
      return;
    }
    onSave(exercise, sets);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ThemedText style={styles.header}>Log Sets for {exercise}</ThemedText>
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
          <FlatList
            data={sets}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ThemedText style={styles.setText}>
                {item.reps} reps @ {item.weight} kg
              </ThemedText>
            )}
          />
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
    marginBottom: 20,
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
  setText: {
    color: '#AAA',
    marginTop: 10,
  },
});
