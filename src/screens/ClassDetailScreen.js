import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ClassContext } from '../contexts/ClassContext';
import { StudentContext } from '../contexts/StudentContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ClassDetailScreen = ({ route, navigation }) => {

  const { classId } = route.params;
  const { classes } = useContext(ClassContext);
  const { students, addStudent, removeStudent } = useContext(StudentContext);
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

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//        <TouchableOpacity onPress={() => handleStudentPress(item.id)} style={styles.studentItem}>
//             <Text>{item.name}</Text>
//           </TouchableOpacity>
//       <TouchableOpacity onPress={() => handleRemoveStudent(item.id)}>
//         <Icon name="delete" size={24} color="red" />
//       </TouchableOpacity>
//     </View>
//   );

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleStudentPress(item.id)} style={styles.studentItem}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => handleEditStudent(item.id)} style={styles.icon}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveStudent(item.id)} style={styles.icon}>
          <Icon name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{classes.find((cls) => cls.id === classId)?.name} Detayları</Text>
//       <FlatList
//         data={classStudents}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//       />
//       <Button title="Öğrenci Ekle" onPress={() => navigation.navigate('AddStudent', { classId })} />
      
//     </View>
//   );
return (
    <View style={styles.container}>
      <Text style={styles.header}>{classes.find((cls) => cls.id === classId)?.name} Detayları</Text>
      <FlatList
        data={classStudents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="Öğrenci Ekle" onPress={() => navigation.navigate('AddStudent', { classId })} />
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
  });

export default ClassDetailScreen;
