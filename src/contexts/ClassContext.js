import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const loadClasses = async () => {
      try {
        const storedClasses = await AsyncStorage.getItem('classes');
        if (storedClasses) {
          setClasses(JSON.parse(storedClasses));
        }
      } catch (error) {
        console.error('Veri yüklenirken hata oluştu:', error);
      }
    };

    loadClasses();
  }, []);

  const saveClasses = async (updatedClasses) => {
    try {
      await AsyncStorage.setItem('classes', JSON.stringify(updatedClasses));
    } catch (error) {
      console.error('Veri kaydedilirken hata oluştu:', error);
    }
  };

  const addClass = (className) => {
    const newClass = { id: classes.length + 1, name: className, students: [] };
    const updatedClasses = [...classes, newClass];
    setClasses(updatedClasses);
    saveClasses(updatedClasses);
  };

  const removeClass = (classId) => {
    const updatedClasses = classes.filter((cls) => cls.id !== classId);
    setClasses(updatedClasses);
    saveClasses(updatedClasses);
  };
  
  const editClass = (classId, newName) => {
    const updatedClasses = classes.map((cls) =>
      cls.id === classId ? { ...cls, name: newName } : cls
    );
    setClasses(updatedClasses);
    saveClasses(updatedClasses);
  };

  return (
    <ClassContext.Provider value={{ classes, setClasses, addClass, removeClass, editClass  }}>
      {children}
    </ClassContext.Provider>
  );
};
