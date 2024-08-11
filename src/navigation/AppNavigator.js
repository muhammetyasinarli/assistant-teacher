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
import EditNoteScreen from '../screens/EditNoteScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ClassList">
      <Stack.Screen name="ClassList" component={ClassListScreen} options={{ title: 'SINIFLAR' }} />
      <Stack.Screen name="ClassDetail" component={ClassDetailScreen} options={{ title: 'SINIF DETAYLARI' }} />
      <Stack.Screen name="StudentDetail" component={StudentDetailScreen} options={{ title: 'ÖĞRENCİ DETAYLARI' }} />
      <Stack.Screen name="AddClass" component={AddClassScreen} options={{ title: 'SINIF EKLE' }} />
      <Stack.Screen name="AddStudent" component={AddStudentScreen} options={{ title: 'ÖĞRENCİ EKLE' }} />
      <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'NOT EKLE' }} />
      <Stack.Screen name="EditClass" component={EditClassScreen} options={{ title: 'SINIFI DÜZENLE' }} /> 
      <Stack.Screen name="StudentEdit" component={StudentEditScreen} options={{ title: 'ÖĞRENCİ DÜZENLE' }} /> 
      <Stack.Screen name="EditNote" component={EditNoteScreen} options={{ title: 'NOT DÜZENLE' }} /> 
    </Stack.Navigator>
  );
};

export default AppNavigator;
