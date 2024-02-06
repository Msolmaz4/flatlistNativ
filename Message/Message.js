
import React from 'react';
import { View, Image, Text } from "react-native"

export const Message = ({ name, avatar, news, message, online }) => {
    // const  = props
    console.log(avatar, "message")
    return (
        <View style={{ width: "100%", height: 80, flexDirection: "row", margin: 2, padding: 2 }}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: 80, height: 80,borderColor:'#4732B1'}} source={{ uri: avatar }} />
                {
                    online && (  <View style={{width:10,height:10,borderRadius:5,position:"absolute",bottom:5,right:5,backgroundColor:"green"}}></View>)
                }
              
            </View>
            
            <View style={{ flex: 3 }}>
                <Text>{name}</Text>
                <Text>{message}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{backgroundColor:"red",width:30,height:30,borderRadius:15, justifyContent:"center" ,alignItems:"center"}}>
                    <Text>{news}</Text>
                </View>
            </View>

        </View>
    )
}