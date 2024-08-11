// StudentEditScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StudentContext } from '../contexts/StudentContext';
import EditItem from '../components/EditItem'

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
    <EditItem itemName ={name} setItemName={setName} onSubmit={handleSave} placeholder="Öğrenci adı giriniz"></EditItem>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default StudentEditScreen;
