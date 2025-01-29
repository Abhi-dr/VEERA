import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Expo Icons


// ContactCard Component
const ContactCard = ({ contact }) => {
  return (
    <View className="flex-row items-center p-4 rounded-lg bg-white my-2">
      <Image
        source={{ uri: contact.image }}
        className="w-12 h-12 rounded-full mr-4"
        accessibilityLabel={`${contact.name}'s profile image`}
      />
      <View className="flex-1">
        <Text className="text-lg font-bold">{contact.name}</Text>
        <View className="flex-row items-center mt-1">
          <FontAwesome name="phone" size={16} color="gray" />
          <Text className="ml-2 text-gray-500">{contact.phone}</Text>
        </View>
      </View>
      <TouchableOpacity className="p-2">
        <MaterialIcons name="more-vert" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

// Add New Button Component
const AddNewButton = () => {
  return (
    <TouchableOpacity className="flex-row items-center mb-4">
      <View className="bg-primary p-4 rounded-full">
        <MaterialIcons name="add" size={28} color="white" />
      </View>
      <Text className="text-primary font-semibold text-lg ml-2">Add New</Text>
    </TouchableOpacity>
  );
};

// Main Contact List Component
const ContactList = () => {
  const contacts = [
    { id: '1', name: 'Dad', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Mom', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Son', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Granny', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Dad', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Mom', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '7', name: 'Son', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
    { id: '8', name: 'Granny', phone: '293-616-3324', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <View className="flex-1 p-4">
      <AddNewButton />
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactCard contact={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ContactList;
