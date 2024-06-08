import { View, Text , Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';
export default function Header() {

    const {user} = useUser();
  
    return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.primary,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        paddingTop:10
        }}>
        <Image style={{width:50,height:50, borderRadius:100}} source={{uri:user?.imageUrl}} />
      
      <View>
        <Text style={{
            color:'#fff'
        }}>Welcome,</Text>
        <Text style={{
            fontSize:20,
            fontFamily:'outfit-medium',
            color:'#fff'
        }}>{user?.fullName}</Text>
      </View>

      </View>

        {/* Search Bar */}
        <View style={{
            display:"flex",
            flexDirection:'row',
            gap:10,
            padding:10,
            alignItems:'center',
            backgroundColor:'#fff',
            borderRadius:8,
            marginTop:20

        }}>
        <Feather name="search" size={24} color={Colors.primary} />
           <TextInput placeholder='Search... '
           style={{
            fontFamily:'outfit',
            fontSize:16
           }}
           />
        </View>

    </View>
  )
}
