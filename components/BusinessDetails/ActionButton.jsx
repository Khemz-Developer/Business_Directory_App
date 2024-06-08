import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Linking } from "react-native";
import callImage from "../../assets/images/call.png";
import locationImage from "../../assets/images/pin.png";
import webImage from "../../assets/images/web.png";
import shareImage from "../../assets/images/share.png";
export default function ActionButton({ businessDetails }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: callImage,
      url: "tel:" + businessDetails?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: locationImage,
      url:
        "https://www.google.com/maps/search/?api=1&query=" +
        businessDetails?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: webImage,
      url: businessDetails?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: shareImage,
      url : "https://api.whatsapp.com/send?text=Check out this business "+businessDetails?.name+" at "+businessDetails?.address+" Contact: "+businessDetails?.contact+" Website: "+businessDetails?.website,
    },
  ];
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={()=>Linking.openURL(item.url)}
            style={{
              marginHorizontal: 20,
            }}
          >
            <Image
              source={item?.icon}
              style={{
                width: 50,
                height: 50,
              }}
            />

            <Text style={{
                fontFamily:'outfit-medium',
                textAlign:'center',
                marginTop:5
            }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
