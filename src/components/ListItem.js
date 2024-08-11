import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ListItem({ handleDetail, handleEdit , handleRemove, itemData}) {

    const renderItem = ({ item }) => (    <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => handleDetail(item.id)} style={styles.studentItem}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => handleEdit(item.id)} style={styles.icon}>
            <Icon name="edit" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.icon}>
            <Icon name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>);

  return (
    <FlatList
    data={itemData}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem}
    />
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