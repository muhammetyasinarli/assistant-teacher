// EditClassScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';

const EditClassScreen = ({ route, navigation }) => {
  const { classId } = route.params;
  const { classes, editClass } = useContext(ClassContext);
  const [className, setClassName] = useState('');

  useEffect(() => {
    const classToEdit = classes.find(cls => cls.id === classId);
    if (classToEdit) {
      setClassName(classToEdit.name);
    }
  }, [classId, classes]);

  const handleSaveEdit = () => {
    if (className.trim() !== '') {
      editClass(classId, className);
      navigation.goBack();
    } else {
      Alert.alert('Hata', 'Sınıf adı boş olamaz.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sınıfı Düzenle</Text>
      <TextInput
        style={styles.input}
        placeholder="Sınıf adını girin"
        value={className}
        onChangeText={setClassName}
      />
      <Button title="Kaydet" onPress={handleSaveEdit} />
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

export default EditClassScreen;
