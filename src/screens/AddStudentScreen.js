import React, { useState, useContext } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { StudentContext } from '../contexts/StudentContext';
import NewItem from '../components/NewItem'

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
    <NewItem  itemName ={studentName} setItemName={setStudentName} onSubmit={handleAddStudent} placeholder="Öğrenci adı giriniz"></NewItem>
  );
};



export default AddStudentScreen;
