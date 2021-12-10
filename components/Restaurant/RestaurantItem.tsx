import React from 'react'
import { TouchableOpacity } from 'react-native'
import RestaurantImage from './RestaurantImage'
import RestaurantInfo from './RestaurantInfo'
import { restaurant } from './Restaurants'

const RestaurantItem = ({ name, image_url, rating }: restaurant) => {
    return (
        <TouchableOpacity style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: '#fff'
        }} activeOpacity={0.8}>
            <RestaurantImage image_url={image_url} />
            <RestaurantInfo name={name} rating={rating} />
        </TouchableOpacity>
    )
}

export default RestaurantItem
