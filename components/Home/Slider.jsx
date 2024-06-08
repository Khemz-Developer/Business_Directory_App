import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from './../../configs/FirebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore'
import { FlatList } from 'react-native'

const Slider = () => {

    const [sliderList,setSliderList] = useState([])

    useEffect(()=>{
        GetSliderList()
    },[]);
  
    const GetSliderList =async ()=>{
        setSliderList([]);
        const q = query(collection(db,'Slider'));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc)=>{
            //console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
           
            
        })
        
    }
  return (
    <View>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        paddingLeft:20,
        paddingTop:20,
        marginBottom:10
      }}>Special for you ! </Text>

      <FlatList style={{
        paddingLeft:20
      }} showsHorizontalScrollIndicator={false} horizontal={true} data={sliderList} renderItem={({item,index})=>(
        <Image source={{uri:item.imageUrl}}
        style={{
            width:300,
            height:160,
            borderRadius:15,
            marginRight:15

        }} />
      )}/>
    </View>
  )
}

export default Slider