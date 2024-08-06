import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StudentContext } from '../contexts/StudentContext';
import { ClassContext } from '../contexts/ClassContext';

const AddStudentScreen = ({ route, navigation }) => {
  const { classId } = route.params;
  const { addStudent } = useContext(StudentContext);
  const [studentName, setStudentName] = useState('');

  const handleAddStudent = () => {
    if (studentName.trim()) {
      addStudent(classId, studentName);
      setStudentName('');
      navigation.goBack(); // Öğrenci eklendikten sonra önceki ekrana dön
    } else {
      Alert.alert('Hata', 'Öğrenci adı girin.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yeni Öğrenci Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Öğrenci adı"
        value={studentName}
        onChangeText={setStudentName}
      />
      <Button title="Ekle" onPress={handleAddStudent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default AddStudentScreen;
