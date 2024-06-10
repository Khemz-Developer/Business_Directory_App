import { View, Text, Image, TextInput ,TouchableOpacity, ToastAndroid, ActivityIndicator } from "react-native";
import React, { useEffect , useState } from "react";
import { useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { collection, doc, getDocs , query, setDoc } from "firebase/firestore";
import { db } from "./../../configs/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";


export default function AddBusiness() {
  const navigation = useNavigation();
  const [image, setImage] = React.useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const {user} = useUser();

  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Add New Business",
    });

    GetCategory();
  }, []);

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setImage(result?.assets[0].uri);
    console.log(result);
  };

  const GetCategory = async () =>{

    setCategoryList([]);

    const q = query(collection(db,'Category'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      //console.log(doc.data());
      setCategoryList(prev=>[...prev,
        {
          label: doc.data().name,
          value: doc.data().name
        }
      ])
    })
  }

  const onAddNewBusiness = async () =>{
    setLoading(true);
    const fileName = Date.now().toString()+".jpg";
    const response = await fetch(image);
    const blob = await response.blob();

    const imageRef = ref(storage, "business-app/"+fileName);

    await uploadBytes(imageRef,blob).then((snapshot)=>{
      console.log("Uploaded a blob or file!");
    }).then(resp=>{
      getDownloadURL(imageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
         saveBusinessDetails(downloadUrl);
      })
    });
    setLoading(false);
  }

  const saveBusinessDetails = async (downloadUrl) =>{
     await setDoc(doc(db,'BusinessList',Date.now().toString()),
    {
      name: name,
      address: address,
      contact: contact,
      website: website,
      about: about,
      category: category,
      username:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userImage:user?.imageUrl,
      imageUrl: downloadUrl,
    })
    setLoading(false);
    ToastAndroid.show("Business Added Successfully",ToastAndroid.LONG);
  }
  return (
    <View>
      <View
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Add New Business
        </Text>

        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 15,
            color: "gray",
            marginTop: 10,
          }}
        >
          Please fill all the details in order to add business
        </Text>
      </View>
      <TouchableOpacity onPress={() => onImagePick()}>
        {!image ? (
          <Image
            source={require("./../../assets/images/placeholder.png")}
            style={{
              width: 100,
              height: 100,
              margin: 10,
            }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              margin: 10,
              borederWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
            }}
          />
        )}
      </TouchableOpacity>

      <View>
        <TextInput
          onChangeText={(v)=>setName(v)}
          placeholder="Name"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "gray",
            marginHorizontal: 10,
            fontSize: 16,
            fontFamily: "outfit",
          }}
        />

        <TextInput
          placeholder="Address"
          onChangeText={(v)=>setAddress(v)}
          style={{
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "gray",
            marginHorizontal: 10,
            fontSize: 16,
            fontFamily: "outfit",
          }}
        />

        <TextInput
          placeholder="Contact"
          onChangeText={(v)=>setContact(v)}
          style={{
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "gray",
            marginHorizontal: 10,
            fontSize: 16,
            fontFamily: "outfit",
          }}
        />

        <TextInput
          placeholder="Website"
          onChangeText={(v)=>setWebsite(v)}
          style={{
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "gray",
            marginHorizontal: 10,
            fontSize: 16,
            fontFamily: "outfit",
          }}
        />

        <TextInput
          placeholder="About"
          onChangeText={(v)=>setAbout(v)}
          multiline
          numberOfLines={5}
          style={{
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "gray",
            marginHorizontal: 10,
            fontSize: 16,
            fontFamily: "outfit",
          }}
        />
        <View style={{
          padding:5,
          borderWidth:1,
          borderRadius:5,
          borderColor:'gray',
          margin:10,
        }}>
          <RNPickerSelect 
            onValueChange={(value) => setCategory(value)}
            items={categoryList}
          />
        </View> 
      </View>

      <TouchableOpacity disabled={loading} onPress={()=>onAddNewBusiness()}>
        
        {loading? 
        <ActivityIndicator size={'large'} color={'black'}/>:
        <Text
          style={{
            padding: 10,
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            margin: 10,
            borderRadius: 5,
            fontFamily: "outfit-medium",
          }}
        >
          Add Business
        </Text> 
        }
        
      </TouchableOpacity>
      
    </View>
  );
}
