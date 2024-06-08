import { View, Image,Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function CategoryCard({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
    <View style={{
        padding:15,
        borderRadius:99,
        marginRight:15,
        backgroundColor:"#EEEAF4",
        marginTop:10
    }}>
    <Image source={{uri:category.icon}} 
      style={{
        width:50,
        height:50,
        
      }}/>

    </View>
    <Text style={{
        fontSize:12,
        fontFamily:'outfit-medium',
        marginLeft:22,
        alignItems:'center',
        marginTop:5 
   
    }}>{category.name}</Text>
    </TouchableOpacity>
  )
}