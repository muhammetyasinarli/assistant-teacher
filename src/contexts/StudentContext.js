import React, { createContext, useState, useEffect ,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NoteContext } from './NoteContext'; 

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const { notes, setNotes, saveNotes } = useContext(NoteContext); 

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const storedStudents = await AsyncStorage.getItem('students');
        if (storedStudents) {
          setStudents(JSON.parse(storedStudents));
        }
      } catch (error) {
        console.error('Failed to load students from AsyncStorage:', error);
      }
    };

    loadStudents();
  }, []);

  const saveStudents = async (students) => {
    try {
      await AsyncStorage.setItem('students', JSON.stringify(students));
    } catch (error) {
      console.error('Failed to save students to AsyncStorage:', error);
    }
  };

  const addStudent = (classId, studentName) => {

    let newId = 1;
    
    if (students.length > 0) {
        const maxId = Math.max(...students.map(cls => cls.id));
        newId = maxId + 1;
    }

    const newStudent = { id: newId, name: studentName.toUpperCase() , classId };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  const editStudent = (studentId,studentName) => {
    const updatedStudents = students.map((s) =>
      s.id === studentId ? { ...s, name: studentName.toUpperCase()  } : s
    );
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  const removeStudent = (studentId) => {
    const updatedStudents= students.filter((cls) => cls.id !== studentId);
    setStudents(updatedStudents);
    saveStudents(updatedStudents);

       // İlgili notları sil
       const updatedNotes = notes.filter((note) => note.studentId !== studentId);
       setNotes(updatedNotes);
       saveNotes(updatedNotes);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent , setStudents, editStudent}}>
      {children}
    </StudentContext.Provider>
  );
};
