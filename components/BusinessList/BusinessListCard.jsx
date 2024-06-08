import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function BusinessListCard({ business }) {
  
  const router = useRouter();
 
  return (
    <TouchableOpacity onPress={()=>router.push('/businessdetails/'+business.id)}>
      <View
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 15,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: business.imageUrl }}
          style={{
            width: 130,
            height: 120,
            borderRadius: 15,
          }}
        />

        <View style={{
            gap: 5,
            
        }}>
          <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 17,
          }}>{business.name}</Text>
          <Text style={{
            fontFamily: "outfit-medium",
          }}>{business.category}</Text>
          <Text style={{
            fontFamily: "outfit-medium",
            color: "gray",
          }}>{business.address}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 1,
            }}
          >
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require("./../../assets/images/star.png")}
            />
            <Text style={{ fontFamily: "outfit" }}>4.5</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
