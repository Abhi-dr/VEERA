import { View, Text } from 'react-native'
import React from 'react'
import { useSession } from '../../../context/ctx.jsx';
import { useState } from 'react';
import { Emergency,FalseTrue } from '../../../util/sosMethod.js';
import Etimer from '../../../components/eTimer.jsx';
import Anomali from '../../../components/Anomali';

const home = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <Etimer isTrue={()=>{Emergency(errorMsg)}} isFalse={FalseTrue} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    <Anomali  modalVisible={modalVisible} setModalVisible={setModalVisible}  />
    </>
  )
}
export default home