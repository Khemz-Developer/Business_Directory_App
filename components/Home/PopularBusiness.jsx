import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {

  const [businessList,setBusinessList] = useState([]);

  useEffect(()=>{
    GetBusinessList();
  },[])
  const GetBusinessList= async()=>{
    setBusinessList([]);
    const q = query(collection(db,'BusinessList'),limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      //console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }

  return (
    <View>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
        paddingHorizontal:20
      }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20
      }}>PopularBusiness</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:15,
        marginTop:3,
        color:Colors.primary
      }}>View all</Text>
      </View>

      <FlatList style={{
        paddingLeft:20
      }} showsHorizontalScrollIndicator={false} horizontal={true} data={businessList} renderItem={({item,index})=>(
        <PopularBusinessCard business={item} key={index}/>
      )}/>
    </View>
  )
}