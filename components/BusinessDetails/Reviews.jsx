import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";
import { db } from "../../configs/FirebaseConfig";

export default function Reviews({ businessDetails }) {
  const [rating, setRating] = useState(3);
  const [reviewInput, setReviewInput] = useState("");
  const { user } = useUser();

  const onSubmit = async () => {
    console.log("Rating: ", rating);
    console.log("Review: ", reviewInput);
    const docRef = doc(db, "BusinessList", businessDetails?.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        review: reviewInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });
    ToastAndroid.show("Review Submitted", ToastAndroid.BOTTOM);
  };

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
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: Colors.mygray,
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            textAlignVertical: "top",
          }}
          onChangeText={(value) => setReviewInput(value)}
          numberOfLines={4}
          placeholder="Write a review"
        />

        <TouchableOpacity
          onPress={() => onSubmit()}
          disabled={!reviewInput}
          style={{
            backgroundColor: Colors.primary,
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "outfit-medium",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Previous Reviews */}
      <View>
        {businessDetails?.reviews?.map((item, index) => (
          <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.mygray,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: 'white',
            
            
          }} key={index}>
            <Image
              source={{ uri: item.userImage }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <View style={{
              gap:4,
              
            }}>
              <Text style={{
                fontFamily: "outfit-medium",
              
              }}>{item.userName}</Text>
              <Rating
                style={{
                  alignItems: "flex-start",
                }}
                showRating={false}
                imageSize={15}
                readonly
                startingValue={item.rating}
              />
              <Text style={{
                color: 'gray'
              }}>{item.review}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
