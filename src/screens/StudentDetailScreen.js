import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { StudentContext } from '../contexts/StudentContext';
import { NoteContext } from '../contexts/NoteContext';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../components/ListItem'

const StudentDetailScreen = ({ route }) => {

  const { studentId } = route.params;
  const { students } = useContext(StudentContext);
  const { notes, removeNote } = useContext(NoteContext);
  const [student, setStudent] = useState(null);

  const navigation = useNavigation(); 

  useEffect(() => {
    if (students.length > 0) {
      const studentData = students.find((s) => s.id === studentId);
      setStudent(studentData);
    }
  }, [students, studentId]);


  if (!student) {
    return (
      <View style={styles.container}>
        <Text>Öğrenci verileri yükleniyor...</Text>
      </View>
    );
  }

  const studentNotes = notes.filter(note => note.studentId === student.id);

  const handleRemoveNote = (noteId) => {
    removeNote(noteId);
    navigation.navigate('StudentDetail', { studentId });
  };

  const handleEditNote = (noteId) => {
    navigation.navigate('EditNote', { noteId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{student.name} Notları</Text>
      <ListItem handleDetail={handleEditNote} 
              handleEdit={handleEditNote}
              handleRemove={handleRemoveNote} 
              itemData={studentNotes}>
      </ListItem>
    <Button title="Not Ekle" onPress={() => navigation.navigate('AddNote', { studentId })} />
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
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default StudentDetailScreen;
