import { View, FlatList, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { query } from "firebase/database";
import { collection, where, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    }),
      getBusinessList();
  }, []);

  const getBusinessList = async () => {
    setLoading(true);
    setBusinessList([]);
    //fetch business list by category by firebase
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      setBusinessList((prev) => [...prev,{id:doc?.id, ...doc.data()}]);
    });
    setLoading(false);
  };
  return (
    <View>
      {businessList?.length > 0 && loading == false ? (
        <FlatList
          style={{
            paddingLeft: 0,
          }}
          onRefresh={getBusinessList}
          refreshing={loading}
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : loading ? (
        <ActivityIndicator
          style={{
            marginTop: 200,
          }}
          size={"large"}
          color={Colors.primary}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
            color: "gray",
            marginTop: 200,
          }}
        >
          No business found
        </Text>
      )}
    </View>
  );
}
