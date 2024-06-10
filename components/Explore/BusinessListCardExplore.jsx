import { View, Text, Image , TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function BusinessListCardExplore({ business }) {

  const router = useRouter();
  return (
    <TouchableOpacity onPress={()=>router.push('/businessdetails/'+business.id)}
      style={{
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: "gray",
          }}
        >
          {business?.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}