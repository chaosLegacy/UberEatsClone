import React, { useContext } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RestaurantContext } from './Restaurants';

const RestaurantImage = () => {
    const { image_url } = useContext(RestaurantContext);
    return (
        <View>
            <Image source={{ uri: image_url }}
                style={{
                    width: '100%',
                    height: 180
                }} />
            <TouchableOpacity style={{
                position: 'absolute',
                top: 20,
                right: 20
            }}>
                <MaterialCommunityIcon name='heart-outline' size={25} color={'#fff'} />
            </TouchableOpacity>
        </View>
    )
}

export default RestaurantImage
