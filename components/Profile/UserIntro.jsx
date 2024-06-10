import { View, Text ,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function UserIntro() {

  const {user } = useUser();
  return (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
        
    }}>
      <Image style={{
        width: 100,
        height: 100,  
        borderRadius: 50,
      }} source={{uri:user?.imageUrl}}/>

      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginTop: 20,
        
      
      }}>{user.fullName}</Text>
      <Text style={{
        fontFamily: 'outfit-medium',
        color: 'gray'
      }}>{user.primaryEmailAddress.emailAddress}</Text>


    </View>
  )
}