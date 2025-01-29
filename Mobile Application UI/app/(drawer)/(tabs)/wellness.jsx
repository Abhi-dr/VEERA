import React, { useState,useEffect,useRef } from 'react';
import { View, Switch, Pressable, Text,Animated } from 'react-native';
import ExpoIcon from '../../../constant/expoIcon.js'
import { Emergency,FalseTrue } from '../../../util/sosMethod.js';
import Etimer from '../../../components/eTimer.jsx';


const wellness = () => {

  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale

  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const pingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5, // Scale up
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Scale down
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    if(isEnabled){
      pingAnimation.start();
    }
    return () => {
      pingAnimation.stop();
      // Reset to default scale
      scaleAnim.setValue(1);
    };
  }, [scaleAnim,isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(()=>{
    let timer;
    if(isEnabled){
      timer=setInterval(()=>{
        setModalVisible(true);
      },10000)
    }
    else{
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  })

  return (
    <>
    <Etimer isTrue={()=>{Emergency(errorMsg)}} isFalse={FalseTrue} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex flex-col items-center justify-center ">
        <Text className="text-3xl font-bold px-5 text-gray-600 text-center mb-16 z-10">WellNess Mode is {isEnabled ? "Enabled" : "Disabled"}</Text>
        {/* <View className={`flex-1 items-center justify-center `}> */}
        <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          transform: [{ scale: scaleAnim }],
          borderColor: isEnabled ? '#34d399' : '#FF5555',
          borderWidth: 2,
          width: 256,
          height: 256,
          padding: 2,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isEnabled ? '#34d399' : '#FF5555',
        }}
      >
        </Animated.View>
          <View className={`flex flex-row w-64 h-64 p-2 rounded-full justify-center items-center border- ${isEnabled ? 'border-green-400' : 'border-primary'} `}>
            <Pressable
              className={` ${isEnabled ? 'bg-green-400' : 'bg-[#FF5555]'} w-full h-full rounded-full flex justify-center items-center   active:bg-green-300`}
              onPress={toggleSwitch}>
              <ExpoIcon.MaterialIcons name='emergency-share' size={70} color='white' />
              <Text className="my-2 text-xl text-white font-bold rounded-full text-center flex flex-col  ">
                WellNess</Text>
            </Pressable>
          </View>
        </View>
    </View>
    </>
  );
};

export default wellness;
