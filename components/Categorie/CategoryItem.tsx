import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'

export type cat = {
    image: any;
    text: string
}

const CategoryItem = ({ image, text }: cat) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center', marginRight: 30
        }}>
            <Image source={image}
                style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain'
                }} />
            <Text style={{
                fontSize: 13,
                fontWeight: '900'
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem
