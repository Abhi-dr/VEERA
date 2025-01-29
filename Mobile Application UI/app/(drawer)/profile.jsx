import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {  Feather } from '@expo/vector-icons';
import { styled } from 'nativewind';
import IMG from '../../constant/images.js'

const ProfilePage = () => {
  return (
    <ScrollView className="flex-1 ">
      {/* Profile Card */}
      <View className="items-center p-4">
        <View className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
          <Image
            source={IMG.profile} // Replace with demo image
            className="w-full h-full"
          />
        </View>
        <Text className="text-xl font-bold text-gray-900">Sharad Chauhan</Text>
        <Text className="text-base text-gray-500">Male</Text>
      </View>

      {/* Details Section */}
      <View className="px-6 space-y-4">
        {/* Email */}
        <View>
          <Text className="text-sm text-gray-600 mb-1">Email</Text>
          <View className="flex-row items-center border-b border-gray-300">
            {/* <TextInput
              value="kim.jennie@gmail.com"
              editable={false}
              className="flex-1 text-gray-800"
            /> */}
            <Text className="flex-1 text-gray-800 py-1">
                sharadsingh6464@gmail.com
            </Text>
          </View>
        </View>

        {/* Phone Number */}
        <View>
          <Text className="text-sm text-gray-600 mb-1">Phone Number</Text>
          <View className="flex-row items-center border-b border-gray-300">
            {/* <TextInput
              value="+6281234567890"
              editable={false}
              className="flex-1 text-gray-800"
            /> */}
            <Text className="flex-1 text-gray-800 py-1">
                +919634879999
            </Text>
          </View>
        </View>

        {/* Website */}
        <View>
          <Text className="text-sm text-gray-600 mb-1">Location</Text>
          <View className="flex-row items-center border-b border-gray-300">
            {/* <TextInput
              value="www.blackpink.com"
              editable={false}
              className="flex-1 text-gray-800"
            /> */}
            <Text className="flex-1 text-gray-800 py-1">
                Nawada, Mathura
            </Text>
          </View>
        </View>

        {/* Password */}
        <View>
          <Text className="text-sm text-gray-600 mb-1">Password</Text>
          <View className="flex-row items-center border-b border-gray-300">
            <TextInput
              value="**********"
              editable={false}
              secureTextEntry
              className="flex-1 text-gray-800"
            />
            <Feather name="eye-off" size={20} color="gray" />
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-red-500 mt-8 p-3 rounded-full items-center">
          <Text className="text-white font-bold">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default styled(ProfilePage);
