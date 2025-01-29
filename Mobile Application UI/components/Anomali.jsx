import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View ,TouchableOpacity} from 'react-native';
import { useEffect } from 'react';


import ExpoIcon from '../constant/expoIcon.js'

const Anomali = ({modalVisible, setModalVisible}) => {






    return (
        <View className={`flex-1 items-center justify-center bg-white ${modalVisible?" opacity-20":""} `}>

            <View className={`flex flex-col items-center justify-center`}>

                <Text className="text-3xl font-bold px-5 text-gray-600 text-center mb-4">Need Emergency Service?</Text>
                <View className="flex flex-row w-64 h-64 p-2 rounded-full justify-center items-center border-2 border-primary">
                    <Pressable
                        className=" bg-[#FF5555] w-full h-full rounded-full flex justify-center items-center   active:bg-red-500"
                        visible={modalVisible}
                        onPress={() => {setModalVisible(true);} }>
                        <ExpoIcon.MaterialIcons name='emergency-share' size={70} color='white' />
                        <Text className="my-2 text-xl text-white font-bold rounded-full text-center flex flex-col  ">
                            Emergency</Text>
                    </Pressable>
                </View>

                <View className="flex flex-col">
                    <Text className="text-2xl font-bold px-5 text-gray-600 text-center my-4">or</Text>
                    {/* Button */}
                    <Pressable className="bg-transparent">
                        <Text className="text-xl font-bold text-[#FF5555]">Emergency Call</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    );
};

export default Anomali;
