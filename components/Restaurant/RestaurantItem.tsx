import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import RestaurantImage from './RestaurantImage'
import RestaurantInfo from './RestaurantInfo'
import { RestaurantContext } from './Restaurants'

const RestaurantItem = () => {
    const { name, image_url, categories, price, reviews, rating } = useContext(RestaurantContext);
    return (
        <TouchableOpacity style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: '#fff'
        }} activeOpacity={0.8}>
            <RestaurantContext.Provider value={{ name, image_url, categories, price, reviews, rating }}>
                <RestaurantImage />
                <RestaurantInfo />
            </RestaurantContext.Provider>
        </TouchableOpacity>
    )
}

export default RestaurantItem
