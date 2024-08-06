import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert,TextInput  } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ClassListScreen = ({ navigation }) => {
  const { classes, removeClass , editClass} = useContext(ClassContext);
  const [classList, setClassList] = useState([]);

  const [editingClassId, setEditingClassId] = useState(null);
  const [newClassName, setNewClassName] = useState('');

  useEffect(() => {
    setClassList(classes);
  }, [classes]);

  const handleRemoveClass = (classId) => {
    removeClass(classId);
    navigation.navigate('ClassList');
  };

  const handleClassPress = (classId) => {
    navigation.navigate('ClassDetail', { classId });
  };

  const handleEditClass = (classId) => {
    navigation.navigate('EditClass', { classId });
  };

  const handleSaveEdit = () => {
    if (newClassName.trim() !== '') {
      editClass(editingClassId, newClassName);
      setEditingClassId(null);
      setNewClassName('');
    } else {
      Alert.alert('Hata', 'Sınıf adı boş olamaz.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleClassPress(item.id)} style={styles.classItem}>
        <Text style={styles.className}>{item.name}</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEditClass(item.id)}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveClass(item.id)}>
          <Icon name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.header}>Sınıflarım</Text>
  //     <FlatList
  //       data={classList}
  //       keyExtractor={(item) => item.id.toString()}
  //       renderItem={renderItem}
  //     />
  //     <Button
  //       title="Yeni Sınıf Ekle"
  //       onPress={() => navigation.navigate('AddClass')}
  //     />
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sınıflarım</Text>
      <FlatList
        data={classList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button
        title="Yeni Sınıf Ekle"
        onPress={() => navigation.navigate('AddClass')}
      />
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  classItem: {
    flex: 1,
    borderBottomWidth: 1,
  },
  className: {
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  editContainer: {
    marginBottom: 20,
  },
});

export default ClassListScreen;
