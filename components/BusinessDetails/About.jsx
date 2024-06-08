import { View, Text } from "react-native";
import React from "react";

export default function About({ businessDetails }) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "white",
        // height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
        }}
      >
        About
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 15,
          lineHeight: 25,
          color: "gray",
          
        }}
      >
        {businessDetails?.about}
      </Text>

      
    </View>
  );
}
