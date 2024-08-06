import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NoteContext } from '../contexts/NoteContext';

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
    <View style={styles.container}>
      <Text style={styles.header}>Yeni Not Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Notunuzu buraya girin"
        value={noteText}
        onChangeText={setNoteText}
      />
      <Button title="Not Ekle" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default AddNoteScreen;
