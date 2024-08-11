import React, { useState, useContext } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';
import NewItem from '../components/NewItem'

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
    <NewItem  itemName ={className} setItemName={setClassName} onSubmit={handleAddClass} placeholder="Şube adı giriniz"></NewItem>
  );
};


export default AddClassScreen;
