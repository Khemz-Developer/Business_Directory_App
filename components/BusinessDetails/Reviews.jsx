import { View, Text ,TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";


export default function Reviews({ businessDetails }) {
  const [rating, setRating] = useState(3);
  const [reviewInput, setReviewInput] = useState("");

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
        }}
      >
        Reviews
      </Text>
      <View>
        <Rating
          showRating={false}
          imageSize={25}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput style={{
            borderWidth:1,
            borderColor:Colors.mygray,
            borderRadius:10,
            padding:10,
            marginTop:10,
            textAlignVertical:'top'
            
        }} 
        onChangeText={(value)=>setReviewInput(value)}
        numberOfLines={4}
        placeholder="Write a review" />

        <TouchableOpacity onPress={()=>console.log(reviewInput,rating)} disabled={!reviewInput} style={{
            backgroundColor:Colors.primary,
            padding:10,
            borderRadius:10,
            marginTop:10,
            alignItems:'center',
            
        }}>
            <Text style={{
                color:'white',
                fontFamily:'outfit-medium'
            }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
