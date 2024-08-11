import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function NewItem({ onSubmit, setItemName , itemName, placeholder}) {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Yeni Ekle</Text> */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Ekle" onPress={onSubmit} />
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
    marginBottom: 20
  },
});

