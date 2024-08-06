import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error('Failed to load notes from AsyncStorage:', error);
      }
    };

    loadNotes();
  }, []);

  const saveNotes = async (notes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Failed to save notes to AsyncStorage:', error);
    }
  };

  const addNote = (studentId, note) => {
    debugger;
    const newNote = { id: notes.length + 1, studentId, note };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};
