import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StudentContext } from '../contexts/StudentContext';
import { NoteContext } from '../contexts/NoteContext';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../components/ListItem'
import Icon from 'react-native-vector-icons/MaterialIcons'; 

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
      <Text style={styles.header}>{student.name} NOTLARI</Text>
      <ListItem handleDetail={handleEditNote} 
              handleEdit={handleEditNote}
              handleRemove={handleRemoveNote} 
              itemData={studentNotes}>
      </ListItem>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AddNote', { studentId })} >
          <Icon name="plus-one" size={24} color="white" />
          <Text style={styles.iconButtonText}>Yeni Not Ekle</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Butonlar arasına boşluk ekler
  },
  iconButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 17,
  },
});

export default StudentDetailScreen;
