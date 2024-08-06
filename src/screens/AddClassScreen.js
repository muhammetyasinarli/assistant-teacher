import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';

const AddClassScreen = ({ navigation }) => {
  const { addClass } = useContext(ClassContext);
  const [className, setClassName] = useState('');

  const handleAddClass = () => {
    if (className.trim()) {
      addClass(className);
      setClassName('');
      navigation.goBack(); // Sınıf eklendikten sonra önceki ekrana dön
    } else {
      Alert.alert('Hata', 'Sınıf adı girin.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yeni Sınıf Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Sınıf adı"
        value={className}
        onChangeText={setClassName}
      />
      <Button title="Ekle" onPress={handleAddClass} />
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

export default AddClassScreen;
