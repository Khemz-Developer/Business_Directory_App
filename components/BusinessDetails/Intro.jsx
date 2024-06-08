import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';

export default function Intro({ businessDetails }) {

    const router = useRouter();
    return (
        <View>
            <View style={{
                position: 'absolute',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingBottom: 8,
                paddingTop: 40,
                paddingHorizontal: 40,
                backgroundColor: Colors.primary,
                opacity: 0.9,
                
            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name='arrow-back-circle' size={40} color='white' />
                </TouchableOpacity>
                <Ionicons name='heart-outline' size={40} color='white' />
            </View>
            <Image source={{ uri: businessDetails?.imageUrl }}
                style={{
                    width: '100%',
                    height: 320,  

                    marginTop:90,
 
                }} />

            <View style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                paddingBottom:10,
                marginTop: -20,
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 26,
            }}>{businessDetails?.name}</Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 18,
            }}>{businessDetails?.address}</Text>
            </View>
        </View>
    )
}