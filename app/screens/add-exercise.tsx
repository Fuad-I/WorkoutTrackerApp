import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddExerciseScreen() {
  const navigation = useNavigation();
  const [sets, setSets] = useState([]);
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const addSet = () => {
    if (!reps || !weight) {
      alert('Please fill in both fields');
      return;
    }
    setSets([...sets, { reps, weight }]);
    setReps('');
    setWeight('');
  };

  const saveExercise = () => {
    // Save and navigate back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Exercise</Text>
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
          <Text style={styles.setText}>
            {item.reps} reps @ {item.weight} kg
          </Text>
        )}
      />
      <Button title="Save Exercise" onPress={saveExercise} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00FFFF',
    fontFamily: 'Orbitron',
    textShadowColor: '#00FFFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00FFFF',
    borderRadius: 5,
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    padding: 10,
    marginBottom: 15,
    fontFamily: 'Orbitron',
  },
  setText: {
    color: '#AAA',
    fontFamily: 'Orbitron',
  },
});
