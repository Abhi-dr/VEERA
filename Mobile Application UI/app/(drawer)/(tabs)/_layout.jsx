import { Tabs } from 'expo-router'
import React from 'react'
import Expoicon from '../../../constant/expoIcon.js'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { Accelerometer } from 'expo-sensors';
import { useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useSession } from '../../../context/ctx';
import { Emergency } from '../../../util/sosMethod.js'


const _layout = () => {


    
    return (
        <Tabs
            screenOptions={{

                headerLeft: () => <DrawerToggleButton 
                tintColor='#fff'                
                />,
                // Customise Header
                headerStyle: {
                    backgroundColor: "#FF5555",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 24,
                },
                tabBarActiveTintColor: "#FF5555",
                tabBarStyle: {
                  backgroundColor: "#fff",
                  borderTopWidth: 1,
                  borderTopColor: "#ccc",
                  height: 84,
                },
                headerShown:false,
              }}
              >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color}) => (
                        <Expoicon.FontAwesome name="home" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name='maps'
                options={{
                    title: "Map",
                    tabBarIcon: ({ color }) => (
                        <Expoicon.Entypo name="map" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
                <Tabs.Screen
                    name="wellness"
                    options={{
                        title: "Wellness",
                        tabBarIcon: ({ color }) => (
                          <Expoicon.MaterialIcons name="health-and-safety" size={24} color={color} />
                        ),
                        headerShown: true,
                    }}
                />
            <Tabs.Screen
                name="contacts"

                options={{
                    title: "Contact",
                    tabBarIcon: ({ color }) => (
                        <Expoicon.AntDesign name="contacts" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
        </Tabs>
        // </GestureHandlerRootView>
    )
}

export default _layout