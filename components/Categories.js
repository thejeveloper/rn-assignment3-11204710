import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const categories = [
  { key: '1', name: 'Exercise', tasks: 12, image: require('../assets/exercise.png') },
  { key: '2', name: 'Study', tasks: 12, image: require('../assets/study.png') },
  { key: '3', name: 'Code', tasks: 15, image: require('../assets/code.png') },
  { key: '4', name: 'Gardening', tasks: 9, image: require('../assets/gardening.png') },
  { key: '5', name: 'Music', tasks: 11, image: require('../assets/music.png') },
  { key: '6', name: 'Meditation', tasks: 8, image: require('../assets/meditation.png') },
  { key: '7', name: 'Painting', tasks: 7, image: require('../assets/painting.png') },
  { key: '8', name: 'Photography', tasks: 6, image: require('../assets/photography.png') },
];

const CategoryItem = ({ category }) => (
  <View style={styles.categoryItem}>
    <Image source={category.image} style={styles.categoryImage} />
    <Text>{category.name}</Text>
    <Text>{category.tasks} Tasks</Text>
  </View>
);

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoriesHeader}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginVertical: 20,
  },
  categoriesHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default Categories;
