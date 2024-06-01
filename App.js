import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import OngoingTasks from './components/OngoingTasks';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <OngoingTasks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

