import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { ActivityIndicator } from "react-native";

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
        <View>
        <Text>{businessid}</Text>
        </View>
      )}
    </View>
  );
}
