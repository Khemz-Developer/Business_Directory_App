import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { getDocs, query, where } from 'firebase/firestore';

export default function Mybusiness() {

    const {user} = useUser();

    const GetBusinessListofUser = async () => {

        
        const q = query(collection(db,'BusinessList'),where('userEmail','==',user?.primaryEmailAddress?.emailAddress));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
        })
    }

    useEffect(()=>{

        GetBusinessListofUser();
    
    },[])


  return (
    <View style={{
        padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        color:'black',
        marginTop:20
      }}>My Business</Text>
     
    </View>
  )
}