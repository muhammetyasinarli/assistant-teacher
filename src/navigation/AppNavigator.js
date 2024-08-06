import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClassListScreen from '../screens/ClassListScreen';
import ClassDetailScreen from '../screens/ClassDetailScreen';
import StudentDetailScreen from '../screens/StudentDetailScreen';
import AddClassScreen from '../screens/AddClassScreen'
import AddStudentScreen from '../screens/AddStudentScreen'
import AddNoteScreen from '../screens/AddNoteScreen'
import EditClassScreen from '../screens/EditClassScreen';
import StudentEditScreen from '../screens/StudentEditScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ClassList">
      <Stack.Screen name="ClassList" component={ClassListScreen} options={{ title: 'Sınıflar' }} />
      <Stack.Screen name="ClassDetail" component={ClassDetailScreen} options={{ title: 'Sınıf Detayları' }} />
      <Stack.Screen name="StudentDetail" component={StudentDetailScreen} options={{ title: 'Öğrenci Detayları' }} />
      <Stack.Screen name="AddClass" component={AddClassScreen} options={{ title: 'Sınıf Ekle' }} />
      <Stack.Screen name="AddStudent" component={AddStudentScreen} options={{ title: 'Öğrenci Ekle' }} />
      <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Not Ekle' }} />
      <Stack.Screen name="EditClass" component={EditClassScreen} options={{ title: 'Sınıfı Düzenle' }} /> 
      <Stack.Screen name="StudentEdit" component={StudentEditScreen} options={{ title: 'Öğrenci Düzenle' }} /> 
    </Stack.Navigator>
  );
};

export default AppNavigator;
