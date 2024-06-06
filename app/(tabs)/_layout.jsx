
import React from 'react'
import  {Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
export default function Tablayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='home' options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }} />
        <Tabs.Screen name='explore' options={{
          tabBarLabel: 'Explore',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={26} />
          ),
        }}/>
        <Tabs.Screen name='profile' options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" color={color} size={26} />
          ),
        }}/>
    </Tabs>
  )
}