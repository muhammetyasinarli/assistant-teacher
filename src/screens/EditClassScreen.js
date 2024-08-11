// EditClassScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';
import EditItem from '../components/EditItem'

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
    <EditItem itemName ={className} setItemName={setClassName} onSubmit={handleSaveEdit} placeholder="Şube adı giriniz"></EditItem>
  );
};



export default EditClassScreen;
