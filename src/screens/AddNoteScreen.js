import React, { useState, useContext } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { NoteContext } from '../contexts/NoteContext';
import NewItem from '../components/NewItem'

const AddNoteScreen = ({ route, navigation }) => {
  const { studentId } = route.params; // route.params.studentId ile studentId değerini alıyoruz
  const { addNote } = useContext(NoteContext);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(studentId, noteText); // NoteContext'e not ekleniyor
      setNoteText('');
      navigation.goBack(); // Not eklendikten sonra önceki ekrana dön
    } else {
      Alert.alert('Hata', 'Lütfen bir not girin.');
    }
  };

  return (
    <NewItem  itemName ={noteText} setItemName={setNoteText} onSubmit={handleAddNote} placeholder="Not giriniz"></NewItem>
  );
};



export default AddNoteScreen;
