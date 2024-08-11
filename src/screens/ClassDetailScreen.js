import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';
import { StudentContext } from '../contexts/StudentContext';
import ListItem from '../components/ListItem';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Icon import et
import { launchImageLibrary } from 'react-native-image-picker';

const ClassDetailScreen = ({ route, navigation }) => {

  const { classId } = route.params;
  const { classes } = useContext(ClassContext);
  const { students, removeStudent } = useContext(StudentContext);
  const [classStudents, setClassStudents] = useState([]);

  useEffect(() => {
    const classDetail = classes.find((cls) => cls.id === classId);
    if (classDetail) {
      const filteredStudents = students.filter((student) => student.classId === classId);
      setClassStudents(filteredStudents);
    }
  }, [classes, students, classId]);

  const handleRemoveStudent = (studentId) => {
    removeStudent(studentId);
    navigation.navigate('ClassDetail', { classId });
  };

  const handleStudentPress = (studentId) => {
    navigation.navigate('StudentDetail', { studentId });
  };

  const handleEditStudent = (studentId) => {
    navigation.navigate('StudentEdit', { studentId });
  };

  const handleBulkAddStudents = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('Kullanıcı iptal etti');
      } else if (response.errorCode) {
        console.log('Hata: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        console.log('Seçilen Fotoğraf: ', selectedImage);
        // Fotoğrafı işle ve öğrenci ekleme işlemi gerçekleştir
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{classes.find((cls) => cls.id === classId)?.name} DETAYLARI</Text>
      <ListItem handleDetail={handleStudentPress} 
              handleEdit={handleEditStudent}
              handleRemove={handleRemoveStudent} 
              itemData={classStudents}>
      </ListItem>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AddStudent', { classId })} >
          <Icon name="plus-one" size={24} color="white" />
          <Text style={styles.iconButtonText}>Yeni Öğrenci Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleBulkAddStudents}>
          <Icon name="photo-library" size={24} color="white" />
          <Text style={styles.iconButtonText}>Toplu Öğrenci Ekle</Text>
        </TouchableOpacity>
      </View>
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
  studentItem: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
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

export default ClassDetailScreen;
