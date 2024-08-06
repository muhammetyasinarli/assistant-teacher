import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

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
      debugger;
      await AsyncStorage.setItem('students', JSON.stringify(students));
    } catch (error) {
      console.error('Failed to save students to AsyncStorage:', error);
    }
  };

  const addStudent = (classId, studentName) => {
    const newStudent = { id: students.length + 1, name: studentName, classId };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  const removeStudent = (studentId) => {
    debugger;
    const updatedStudents= students.filter((cls) => cls.id !== studentId);
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent , setStudents}}>
      {children}
    </StudentContext.Provider>
  );
};
