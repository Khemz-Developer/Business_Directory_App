import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { StyleSheet } from 'react-native'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={{
        display:'flex',
        alignItems:'center',
        marginTop:100
      }}>
      <Image style={{
        width: 240,
        height: 500,
        borderRadius: 20,
        borderWidth:4,
        borderColor:'#000'
       
      
      }} source={require('./../assets/images/login.png')} />
      </View>

      <View style={styles.style1}>
        <Text style={{fontSize:30,fontFamily:'outfit-bold',textAlign:'center'}}>Your Ultimate
          <Text style={{
            color:'#7F57F1',
          }}> Community Business Directory</Text> App    
     
        </Text>
        <Text style={{fontSize:15, fontFamily:'outfit',marginVertical:20,textAlign:'center',color:Colors.gray}}>Find your favorite business near your and post your business to your community</Text>
        <TouchableOpacity onPress={onPress}>
           <Text style={styles.btn}>Let's Get Started !</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  style1:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20,
    elevation:0
  },
  btn:{
    backgroundColor: Colors.primary,
    padding:10,
    textAlign:'center',
    width:200,
    borderRadius:10,
    color:'#fff',
    alignSelf:'center',
  }
})
