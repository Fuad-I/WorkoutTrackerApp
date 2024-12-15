import React from 'react';
import { View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

const exercises = ['Bench Press', 'Squat', 'Deadlift', 'Pull-Ups', 'Push-Ups'];

export default function ChooseExerciseModal({ visible, onClose, onExerciseSelect }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ThemedText style={styles.header}>Choose Exercise</ThemedText>
          <FlatList
            data={exercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.exerciseItem}
                onPress={() => {
                  onExerciseSelect(item);
                  onClose();
                }}
              >
                <ThemedText>{item}</ThemedText>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose}>
            <ThemedText style={styles.closeText}>Close</ThemedText>
          </TouchableOpacity>
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
  exerciseItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#121212',
    borderRadius: 5,
  },
  closeText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#FF0000',
  },
});
