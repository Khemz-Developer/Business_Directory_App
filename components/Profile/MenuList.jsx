import { View, Text,Image } from 'react-native'
import React from 'react'
import MyBusinessLogo from './../../assets/images/business-and-trade.png'
import ShareAppLogo from './../../assets/images/share_1.png'
import LogoutLogo from './../../assets/images/logout.png'
import AddBusiness from './../../assets/images/add.png'
import { FlatList } from 'react-native'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function MenuList() {

    const menuList = [
        {
          id: 1,
          name:'Add Business',
          icon: AddBusiness,
          path:'/business/add-business'
        },
        {
          id: 2,
          name:'My Business',
          icon: MyBusinessLogo,
          path:'/business/my-business'
        },
        {
          id: 3,
          name:'Share App',
          icon: ShareAppLogo,
          path:''
        },
        {
          id: 4,
          name:'Logout',
          icon: LogoutLogo,
          path:''
        }
      ]

      const onMenuClick=(item)=>{

        if(item.id==1){
            router.push(item.path)
        }
        if(item.id==2){
            router.push(item.path)
        }
      }

  const router = useRouter();
  return (
    <View style={{
        marginTop: 20,
    }}>
      <FlatList  
       data={menuList}
       numColumns={2}
       renderItem={({item,index})=>(
            <TouchableOpacity onPress={()=>onMenuClick(item)} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                padding: 10,
                paddingVertical: 20,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                margin: 10, 
                backgroundColor: 'white',
            
            }} key={index}>
            
            <Image style={{
                width: 50,
                height: 50,
                flex: 1,
            
            }} source={item.icon} />
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 16,
               
            
            }}>{item.name}</Text>
            </TouchableOpacity>
       )} />

    <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.primary,
        marginTop: 20
        
    }}>- Developed By Khemz Design -</Text>
    </View>
  )
}