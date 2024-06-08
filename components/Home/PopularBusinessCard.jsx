import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PopularBusinessCard({business}) {
  return (
    <View style={{
        marginRight:20,
        marginTop:10,
        backgroundColor:'#EEEAF4',
        padding:8,
        borderRadius:10,
        gap:5,
        paddingBottom:8,
        
      }}>
      <Image style={{
        width:200,
        height:130,
        borderRadius:10,
      }} source={{uri:business?.imageUrl}}/>
     <View style={{
        marginTop:7,
        
     }}> 
     <Text style={{
        fontFamily:'outfit-medium',
        fontsize:17,
        color:'black',
        
        
     }}>{business.name}</Text>
        <Text style={{
        fontFamily:'outfit-medium',
        fontsize:13,
        color:'gray',
        
        
     }}>{business.address}</Text>
     
     <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'       
     }}>
        <View style={{
             display:'flex',
             flexDirection:'row',
             gap:5,
             marginTop:1
        }}>
        <Image style={{
            width:15,
            height:15
        }} source={require('./../../assets/images/star.png')} />
        <Text style={{fontFamily:'outfit'}}>4.5</Text>
        
        </View>
        <Text style={{
             fontFamily:'outfit',
             backgroundColor:Colors.primary,
             borderRadius:3,
             color:'#fff',
             padding:2,
             fontSize:10
            }}>{business.category}
        </Text>
     </View>
     
     </View>
    </View>
  )
}