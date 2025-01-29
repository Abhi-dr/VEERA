import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenderPicker = ({selectedGender,setForm,form}) => {
  return (
    <View className="px-3 py-2">
      <TouchableOpacity
        className="flex-row items-center mb-3"
        onPress={(e) => setForm({ ...form,gender:"Male"})}
      >
        <View
          className={`h-5 w-5 rounded-full border-2 border-black mr-3 ${
            selectedGender === 'Male' ? 'bg-black' : ''
          }`}
        />
        <Text className="text-base text-white">Male</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center mb-3"
        onPress={(e) => setForm({ ...form,gender:"Female"})}
      >
        <View
          className={`h-5 w-5 rounded-full border-2 border-black mr-3 ${
            selectedGender === 'Female' ? 'bg-black' : ''
          }`}
        />
        <Text className="text-base text-white">Female</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderPicker;
