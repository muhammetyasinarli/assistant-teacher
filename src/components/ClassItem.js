import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ClassItem = ({ className, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View>
        <Text style={styles.className}>{className}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  className: {
    fontSize: 18,
  },
});

export default ClassItem;
