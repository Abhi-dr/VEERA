import { View, Text } from 'react-native'
import React from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'

const eTimer = ({isTrue, isFalse,modalVisible,setModalVisible}) => {

    const [timeLeft, setTimeLeft] = useState(10); 

  useEffect(() => {
    let timer;
    if (modalVisible && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000); 
    } else if (timeLeft === 0) {
        console.log("Time up it is an emergency");
        handleClick();
        setModalVisible(false); 
    }
    return () => clearTimeout(timer); 
  }, [modalVisible, timeLeft]);

  const handleClick = () => {
    if (!modalVisible) {
        setModalVisible(true); 
      setTimeLeft(10);    
    }
    else{
        setModalVisible(false);
        setTimeLeft(10);
    }
  };
  return (
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View className="flex-1 items-center justify-center mt-6">
                    <View className="flex items-center justify-center h-full w-full shadow-2xl ">
                        <View className=" w-[90%] rounded-2xl bg-white p-5 shadow-lg">
                            {/* Timer circle */}
                            <View className="flex items-center mb-4">
                                <View className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                                    <Text className="text-pink-500 font-bold text-xl">{timeLeft}</Text>
                                </View>
                            </View>

                            {/* Question */}
                            <Text className="text-center text-lg font-semibold text-pink-600 mb-4">
                                Are you under any threat?
                            </Text>

                            {/* Buttons */}
                            <View className="space-y-2">
                                <TouchableOpacity className="bg-primary py-2 rounded-lg"
                                onPress={() => {setModalVisible(!modalVisible);isTrue();handleClick(false);}}>
                                    <Text className="text-white text-center text-lg">Yes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className="bg-green-300 py-2 rounded-lg" 
                                onPress={() => {setModalVisible(!modalVisible);isFalse();handleClick(false);}}>
                                    <Text className=" text-center text-lg">No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </Modal>
  )
}

export default eTimer