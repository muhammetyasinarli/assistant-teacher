import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StudentItem = ({ studentName, onPress, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.studentName}>{studentName}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Sil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 16,
  },
  item: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
  },
  deleteButton: {
    marginLeft: 16,
  },
  deleteText: {
    color: '#ff6347',
  },
});

export default StudentItem;
