import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';

export default function ExerciseList({ exercise, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <ThemedText style={styles.name}>{exercise.name}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(exercise.id)}>
          <MaterialIcons name="more-vert" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      {expanded && (
        <FlatList
          data={exercise.sets}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ThemedText style={styles.setText}>
              {item.reps} reps @ {item.weight} kg
            </ThemedText>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  setText: {
    color: '#AAA',
    marginTop: 5,
  },
});
