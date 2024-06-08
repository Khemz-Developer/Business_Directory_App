import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { ActivityIndicator } from "react-native";
import Intro from "../../components/BusinessDetails/Intro";
import ActionButton from "../../components/BusinessDetails/ActionButton";
import About from "../../components/BusinessDetails/About";
import Reviews from "../../components/BusinessDetails/Reviews";

export default function BusinessDetail() {
  const { businessid } = useLocalSearchParams();
  const [businessDetails, setBusinessDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetBusinessDetailsById();
  }, []);

  const GetBusinessDetailsById = async () => {
    //fetch business details by id from firebase
    setLoading(true);
    const businessRef = doc(db, "BusinessList", businessid);
    const docSnap = await getDoc(businessRef);

    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      setBusinessDetails(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
    }
  };
  return (
    <View>
      {loading ? (
        <ActivityIndicator style={{
          marginTop: 200,
         
        }} size="large" color="#0000ff" />
      ) : (
        <ScrollView>
           
           {/* Intro */}
           <Intro businessDetails={businessDetails}/>

           {/* Action Button */}
           <ActionButton businessDetails={businessDetails}/>
          
           {/* About Section */}
           <About businessDetails={businessDetails}/>
           
           {/* Reviews Section */}
           <Reviews businessDetails={businessDetails}/>

        </ScrollView>
      )}
    </View>
  );
}
