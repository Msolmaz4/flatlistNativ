import { FlatList, View } from "react-native"
import {  faker } from '@faker-js/faker';
import { Message } from "../Message/Message";

const DATA = Array(20).fill(null).map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    message: faker.lorem.sentence(),
    news: faker.number.int() % 5,
    online:faker.datatype.boolean()
}))


export const MessageList = () => {
    return (
        <View style={{width:"90%"}}>
            <FlatList data={DATA} keyExtractor={(item) => item.id} renderItem={({item}) => <Message name={item.name} avatar={item.avatar} message={item.message}  news={item.news} online={item.online}/>} />
        </View>
    )
}