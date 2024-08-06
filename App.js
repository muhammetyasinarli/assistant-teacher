import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Doğru yolu kullanın
import { NoteProvider } from './src/contexts/NoteContext'; // Doğru yolu kullanın
import { ClassProvider } from './src/contexts/ClassContext'; // Doğru yolu kullanın
import { StudentProvider } from './src/contexts/StudentContext'; // Doğru yolu kullanın

const App = () => {
  return (
    <NavigationContainer>
      <NoteProvider>
        <ClassProvider>
          <StudentProvider>
            <AppNavigator />
          </StudentProvider>
        </ClassProvider>
      </NoteProvider>
    </NavigationContainer>
  );
};

export default App;
