import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity  } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItem from '../components/ListItem'


const ClassListScreen = ({ navigation }) => {

  const { classes, removeClass , editClass} = useContext(ClassContext);
  const [classList, setClassList] = useState([]);


  useEffect(() => {
    const sortedClasses = [...classes].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setClassList(sortedClasses);
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sınıflarım</Text>
     <ListItem handleDetail={handleClassPress} 
              handleEdit={handleEditClass}
              handleRemove={handleRemoveClass} 
              itemData={classList}>
      </ListItem>
      <Button
      styles={styles.saveButton}
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
  }
});

export default ClassListScreen;
