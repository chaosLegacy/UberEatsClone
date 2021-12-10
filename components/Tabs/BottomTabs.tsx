import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 17 }}>
            <Icon icon='home' text='Home' />
            <Icon icon='search' text='browse' />
            <Icon icon='shopping-bag' text='Grocery' />
            <Icon icon='receipt' text='Orders' />
            <Icon icon='user' text='Account' />
        </View>
    )
}

const Icon = ({ icon, text }: { icon: string, text: string }) => {
    return (
        <TouchableOpacity>
            <FontAwesome5 name={icon}
                size={24}
                style={{
                    marginBottom: 3,
                    alignSelf: 'center'
                }}
            />
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default BottomTabs
