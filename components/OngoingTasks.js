import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ongoingTasks = [
  { key: '1', name: 'Mobile App Development' },
  { key: '2', name: 'Web Development' },
  { key: '3', name: 'Push Ups' },
  { key: '4', name: 'Reading a book' },
  { key: '5', name: 'Cooking Dinner' },
  { key: '6', name: 'Grocery Shopping' },
  { key: '7', name: 'Morning Run' },
  { key: '8', name: 'Study for Exam' },
  { key: '9', name: 'Yoga' },
  { key: '10', name: 'Project Meeting' },
  { key: '11', name: 'Write Blog Post' },
  { key: '12', name: 'Gardening' },
  { key: '13', name: 'Learn Guitar' },
  { key: '14', name: 'Meditation' },
  { key: '15', name: 'Clean House' },
];

const OngoingTaskItem = ({ task }) => (
  <View style={styles.ongoingTaskItem}>
    <Text>{task.name}</Text>
  </View>
);

const OngoingTasks = () => {
  return (
    <View style={styles.ongoingTasksContainer}>
      <Text style={styles.ongoingTasksHeader}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        renderItem={({ item }) => <OngoingTaskItem task={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ongoingTasksContainer: {
    marginVertical: 20,
  },
  ongoingTasksHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ongoingTaskItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default OngoingTasks;
