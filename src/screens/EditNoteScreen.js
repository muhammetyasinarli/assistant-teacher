// StudentEditScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NoteContext } from '../contexts/NoteContext';
import EditItem from '../components/EditItem'

const EditNoteScreen = ({ route, navigation }) => {
  const { noteId } = route.params;
  const { notes, setNotes } = useContext(NoteContext);

  const [note, setNote] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const noteData = notes.find(s => s.id === noteId);
    setNote(noteData);
    setName(noteData.name);
  }, [notes, noteId]);

  const handleSave = () => {
    const updatedNotes = notes.map(s => 
      s.id === noteId ? { ...s, name } : s
    );
    setNotes(updatedNotes);
    navigation.goBack();
  };

  if (!note) {
    return (
      <View style={styles.container}>
        <Text>Not yükleniyor...</Text>
      </View>
    );
  }

  return (
    <EditItem itemName ={name} setItemName={setName} onSubmit={handleSave} placeholder="Not giriniz"></EditItem>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default EditNoteScreen;
