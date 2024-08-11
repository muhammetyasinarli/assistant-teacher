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

  return (
    <View style={styles.container}>
     <ListItem handleDetail={handleClassPress} 
              handleEdit={handleEditClass}
              handleRemove={handleRemoveClass} 
              itemData={classList}>
      </ListItem>
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AddClass')} >
          <Icon name="plus-one" size={24} color="white" />
          <Text style={styles.iconButtonText}>Yeni Sınıf Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Butonlar arasına boşluk ekler
  },
  iconButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 17,
  },
});

export default ClassListScreen;
