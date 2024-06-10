import { View, Text , TextInput, Touchable } from "react-native";
import React ,{useState} from "react";
import { Feather } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";
import Category from "./../../components/Home/Category";
import { collection, where,query, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";

export default function explore() {
  const [businessList,setBusinessList] = useState([]);

  const GetBusinessByCategory =async(category)=>{
    setBusinessList([]);
    // Get Business by Category
    const q = query(collection(db,'BusinessList'),where('category','==',category));
    const querySnapshot = await getDocs(q);
    

    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
        }}
      >
        Explore More
      </Text>

 
      {/* Search Bar */}
      <View style={{
            display:"flex",
            flexDirection:'row',
            gap:10,
            padding:10,
            alignItems:'center',
            backgroundColor:'#fff',
            borderRadius:8,
            marginTop:20,
            borderWidth:1,
            borderColor:Colors.primary

        }}>
        <Feather name="search" size={24} color={Colors.primary} />
           <TextInput placeholder='Search... '
           style={{
            fontFamily:'outfit',
            fontSize:16
           }}
           />
        </View>

      {/* Category  */}
       <View style={{
          marginTop:10
        
       }}>
         <Category  explore={true} onCategorySelect={(category)=>GetBusinessByCategory(category)}/> 
       </View>

      {/* Business List */}
       <ExploreBusinessList businessList={businessList}/>
    </View>
  );
}
