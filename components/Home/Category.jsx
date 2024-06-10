import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, query, getDocs } from 'firebase/firestore'
import {db} from './../../configs/FirebaseConfig'
import CategoryCard from './CategoryCard'
import { useRouter } from 'expo-router'

const Category=({explore=false,onCategorySelect}) => {

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

  const onCategoryPressHandler=(item)=>{
      if(!explore){
        router.push('/businesslist/'+item.name)
      }
      else{
        onCategorySelect(item.name)
      }
    }
  

  return (
    <View>
      {!explore &&<View style={{
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
      </View>}

      

      <FlatList style={{
        paddingLeft:20
      }} showsHorizontalScrollIndicator={false} horizontal={true} data={categoryList} renderItem={({item,index})=>(
        <CategoryCard category={item}
        onCategoryPress={(category)=>onCategoryPressHandler(item) }/>
      )}/>
    </View>
  )
}

export default Category