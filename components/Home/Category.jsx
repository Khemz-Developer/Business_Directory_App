import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, query, getDocs } from 'firebase/firestore'
import {db} from './../../configs/FirebaseConfig'
import CategoryCard from './CategoryCard'
import { useRouter } from 'expo-router'

const Category=() => {

  const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();


  useEffect(()=>{
    GetCategoryList()
  },[])

  const GetCategoryList= async ()=>{
    setCategoryList([]);
    const q = query(collection(db,'Category'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      //console.log(doc.data());
      setCategoryList(prev=>[...prev,doc.data()])
      
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
      }}>Categories</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:15,
        marginTop:3,
        color:Colors.primary
      }}>View all</Text>
      </View>

      

      <FlatList style={{
        paddingLeft:20
      }} showsHorizontalScrollIndicator={false} horizontal={true} data={categoryList} renderItem={({item,index})=>(
        <CategoryCard category={item}
        onCategoryPress={(category)=>router.push('/businesslist/'+item.name)} />
      )}/>
    </View>
  )
}

export default Category