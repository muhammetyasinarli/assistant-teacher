// StudentEditScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StudentContext } from '../contexts/StudentContext';

const StudentEditScreen = ({ route, navigation }) => {
  const { studentId } = route.params;
  const { students, setStudents } = useContext(StudentContext);
  const [student, setStudent] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const studentData = students.find(s => s.id === studentId);
    setStudent(studentData);
    setName(studentData.name);
  }, [students, studentId]);

  const handleSave = () => {
    const updatedStudents = students.map(s => 
      s.id === studentId ? { ...s, name } : s
    );
    setStudents(updatedStudents);
    navigation.goBack();
  };

  if (!student) {
    return (
      <View style={styles.container}>
        <Text>Öğrenci verileri yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Öğrenci Güncelle</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Button title="Kaydet" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default StudentEditScreen;
